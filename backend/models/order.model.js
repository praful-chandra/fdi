const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    customer:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cart : [{
        product : {type : mongoose.Schema.Types.ObjectId , ref: "ProductVarianceColor"},
        quantity : {type : Number , default : 1},
        productImage : String,
        addOns : [],
        exchange : {},
        name :String
      }],
    
      coupon :{
          type : mongoose.Schema.Types.ObjectId,
          ref : "Coupon"
      },
      total : Number,
      address : {}

},{
    timestamps : true
})