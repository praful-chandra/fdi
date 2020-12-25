const Order = require("../models/order.model");
const User = require("../models/user.model");
var uniqid = require('uniqid');

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

        const newOrder = new Order({
            orderId : uniqid(),
            customer : user._id,
            cart : item,
            total : cart.totalAmount,
            address
        })
        if(cart.coupon){
            newOrder.coupon = cart.coupon
        }

        await newOrder.save();

        res.json(newOrder);
    }
    catch(err){
        res.status(500).json({error : "Internal server error"})
    }
}