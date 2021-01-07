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
        product : {
            name : String,
            price : Number,
            discountPrice : Number,
            image : String,
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref:"ProductVarianceColor"
            },
        },
        quantity : Number,
        addOns : [],
        exchange : {},
      }],
    
      coupon :{
          title : String,
          discountPrecentage : Number,
          upto : Number,
          code : String
      },
      total : Number,
      address : {},
      status:{
          type : String,
          enum : ["Created","Processing","Packed","Shipped","Delivered","Failed"],
          default : "Created"
      },
      paymentStatus :{
          type : String,
          enum : ["UnPaid","cancelled","failed","paid","COD"],
          default : "UnPaid"
      },
      paymentGatewayInformation:{},
      viewed : {
          type : Boolean,
          default : false
      }

},{
    timestamps : true
})

module.exports = mongoose.model("Order",OrderSchema);