const mongoose = require("mongoose");

const ReturnSchema = new mongoose.Schema({
  orderId: {
    type: String
  },
  orderRef :{
    type : mongoose.Schema.Types.ObjectId,
    ref:"Order"
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductVarianceColor",
    required : true
  },
  item: {
    product : {
        name : String,
        price : Number,
        discountPrice : Number,
        image : String,
    },
    quantity : Number,
    addOns : [],
    exchange : {},
  },
  status:{
      type : String,
      enum : ["Return Requested", "Returned"],
      default : "Return Requested"
  }
},{
    timestamps : true
});

module.exports = mongoose.model("Return",ReturnSchema)
