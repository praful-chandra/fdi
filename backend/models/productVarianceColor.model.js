const mongoose = require("mongoose");


const ProductVarianceColorSchema = new mongoose.Schema({
    product :{
        type : mongoose.Types.ObjectId,
        ref : 'Product'
    },
    variance:{
        type : mongoose.Types.ObjectId,
        ref: 'ProductVariance'
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
    quantity: { type: Number, default: 0 },
  })

  module.exports = mongoose.model("ProductVarianceColor",ProductVarianceColorSchema);