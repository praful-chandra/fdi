const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    code :{
        type :String,
        required : true,
        unique : true,
        index : true,
        uppercase : true
    },
    percentage :{
        type : Number,
        required : true
    },
    upto:{
        type : Number,
        required : true
    }

},{
    timestamps : true
});


module.exports = mongoose.model("Coupon",CouponSchema);