const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    orderId :{
        type: String,
        required: true,
        unique: true,
        index: true,
        uppercase : true
        },
    customer:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cart : [{
        product : {type : mongoose.Schema.Types.ObjectId , ref: "ProductVarianceColor"},
        quantity : {type : Number , default : 1},
        addOns : [],
        exchange : {},
      }],
    
      coupon :{
          type : mongoose.Schema.Types.ObjectId,
          ref : "Coupon"
      },
      total : Number,
      address : {},
      status:{
          type : String,
          enum : ["Created","Processing","Packed","Shipped","Delivered","Failed","Returned"],
          default : "Created"
      },
      paymentStatus :{
          type : String,
          enum : ["UnPaid","Paid","Pending"],
          default : "UnPaid"
      }

},{
    timestamps : true
})

module.exports = mongoose.model("Order",OrderSchema);