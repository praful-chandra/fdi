const Order = require("../models/order.model");
const User = require("../models/user.model");
const ProductVarianceColor = require("../models/productVarianceColor.model");
const Deals = require("../models/dealOfTheWeek.model");
const Coupon = require("../models/coupon.model");
var uniqid = require('uniqid');
const couponModel = require("../models/coupon.model");

exports.addOrder = async (req,res) =>{
    try{

        let {cart,address} = req.body;
        let user = await User.findOne({email : req.user.email});

        let item = [];
        cart.items.map(i=>{
            item.push({
                product : i.product,
                quantity  : i.quantity,
                addOns : i.addOns,
                exchange : i.exchange
            })
        })

        
        for(let i = 0 ; i < item.length ; i++){
            let product = await ProductVarianceColor.findById(item[0].product).populate("variance").populate("product");
            let discount = await Deals.findOne({product : product._id});

            item[i] = {
                ...item[i],
                product:{
                    productId : product._id,
                    name : `${product.product.name} (${product.variance.title}) (${product.name})`,
                    price : product.price,
                    discountPrice : discount ? discount.discountPrice : 0,
                    image : `/api/serveImage/product/${product.product._id}/0/thumb`
                }
            }
        }

        
       
        let totalSum = 0;

        item.map(i=>{
            totalSum += i.quantity *( i.product.discountPrice > 0 ?  i.product.discountPrice : i.product.price);

            i.addOns.map(ad=>{
                totalSum += ad.price * i.quantity
            })    

            if(i.exchange.exchangePrice){
                totalSum -= i.exchange.exchangePrice;
            }
            

        })

        const newOrder = new Order({
            orderId : uniqid(),
            customer : user._id,
            cart : item,
            total : totalSum,
            address
        })
        if(cart.coupon){
            const cpn = await Coupon.findById(cart.coupon._id);
            newOrder.coupon = {
                title : cpn.name,
                discountPrecentage : cpn.percentage,
                upto : cpn.upto,
                code : cpn.code
            }

            const finalSum = (cpn.percentage / 100) * newOrder.total;

            newOrder.total -= finalSum <= cpn.upto ? finalSum : cpn.upto;
        } 

        await newOrder.save();

        res.json({order : newOrder});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
}

exports.getOrder = async(req,res)=>{
    const {orderId} = req.params;
    try{

        const order = await Order.findOne({orderId});
        res.json({paymentStatus : order.paymentStatus});

    }catch(err){
        res.status(500).json({error : "Inrternal server error"})
    }
}

exports.listOrder = async(req,res)=>{
    try{

        const user = await User.findOne({email : req.user.email});
        const orders = await Order.find({customer : user._id});
        return res.json(orders);

    }catch(err){
        res.status(500).json({error : "Inrternal server error"})
    }
}