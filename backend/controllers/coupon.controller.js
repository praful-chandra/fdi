const Coupon = require("../models/coupon.model");

exports.addCoupon = async (req,res)=>{
    try{

        const{name,code,percentage,upto} = req.body;

        const newCoupon = await new Coupon({name,code,percentage,upto}).save();

        res.json(newCoupon);

    }catch(err){
        res.status(500).json({error : "Internal server error"})
    }
}

exports.deleteCoupon = async (req,res) =>{
    try{

        const {couponId} = req.params;

        await Coupon.findByIdAndDelete(couponId);
        res.json({success : true})

    }catch(err){
        res.status(500).json({error : "Internal server error"})
    }
}

exports.getCoupon = async (req,res) =>{
    try{
        let {code} = req.params;
        code = code.toUpperCase();
         const coupon =  await Coupon.findOne({code});
         res.json(coupon);

    }catch(err){
        res.status(500).json({error : "Internal server error"})
    }
}

exports.listCoupons = async(req,res) =>{
    try{

        const list = await Coupon.find();
        res.json(list);

    }catch(err){
        res.status(500).json({error : "Internal server error"})
    }
}