const Order = require("../models/order.model");
const Return = require("../models/returns.model");
const User = require("../models/user.model");
// const ProductVarianceColor = require("../models/productVarianceColor.model");

exports.getReturn = async(req,res)=>{
    try{

        const {orderId,productId} = req.body;
        const user = await User.findOne({email : req.user.email});

        const returnObj = await Return.findOne({orderId,productId,customerId : user._id});

        res.json(returnObj);

    }catch(err){
        return res.status(500).json({error : "Internal server error"});

    }
}

exports.listReturns = async(req,res)=>{
    try{

        const list  = await Return.find();
        res.json(list);

    }catch(err){
        return res.status(500).json({error : "Internal server error"});
    }
}

exports.requestReturn = async(req,res)=>{
    try{

        const {orderId,product} = req.body;
        const user = await User.findOne({email : req.user.email});
        const order = await Order.findOne({orderId , customer : user._id});

        if(!order){
            return res.status(203).json({error : "Not authorized"});
        }

        const newReturn = await new Return({
            orderId,
            customerId : user._id,
            productId : product.product.productId,
            item : product,
        }).save();

        return res.json({success : true})
      

    }catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal server error"});

    }
}