const mongoose = require("mongoose");


const ProductvarianceSchema = new mongoose.Schema({
    product : {
        type : mongoose.Types.ObjectId,
        ref: 'Product'
    },
    title: {
      type: String,
      required: true,
    },
    color :[{
        type : mongoose.Types.ObjectId,
        ref:'ProductVarianceColor'
    }]
  })


  module.exports = mongoose.model("ProductVariance",ProductvarianceSchema);