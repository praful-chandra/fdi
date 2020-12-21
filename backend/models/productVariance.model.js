const mongoose = require("mongoose");


const ProductvarianceSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    slug:{
      type : String,
      required : true,
    lowercase: true,
    unique : true,
      index : true
    },
    title: {
      type: String,
      required: true,
    },
    color :[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'ProductVarianceColor'
    }]
  })


  module.exports = mongoose.model("ProductVariance",ProductvarianceSchema);