const mongoose = require("mongoose");


const ProductVarianceColorSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  variance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductVariance'
  },
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    index: true,
    uppercase : true
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true
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
});



module.exports = mongoose.model("ProductVarianceColor", ProductVarianceColorSchema);