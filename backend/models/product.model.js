const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    index: true,
    unique: true,
    lowercase: true,
    required: true,
  },
  model: { type: String, required: true },
  highlights: Array,
  description: {
    type: String,
    required: true,
    text : true

  },
   metaDescription: {
    type: String,
    required: true,
    text: true,
  },

  images: [{
    thumb: {
      type: Buffer,
      required: true
    },
    full: {
      type: Buffer,
      required: true
    }
  }],
  category: {
    type: ObjectId,
    required: true,
    ref: "Category",
  },
  subCategory: {
    type: ObjectId,
    required: true,
    ref: "subCategory",
  },
  brand: {
    type: ObjectId,
    required: true,
    ref: "Brand"
  },
  tags: [
    {
      type: ObjectId,
      ref: "Tag",
    },
  ],
  addOns: [
    {
      title: String,
      price: Number,
      details: String,
    },
  ],
  options :[{
    type : ObjectId,
    ref:'ProductVariance'
  }],
  maxPrice: {
    type: Number,
    required: true
  },
  minPrice: {
    type: Number,
    required: true
  },
  reviews : [
    {
      star : {
        type : Number,
        max : 5,
        min : 1
      },
      comment : String,
      postedBy : {
        type : ObjectId,
        ref : "User",
        unique : true,
        sparse : true
      },
      date:Date
    }
  ]
},{
  timestamps : true
});



ProductSchema.methods.toJSON = function () {
  const product = this.toObject();

  if(product.images){
    product.images = product.images.map((data, i) => ({
      thumb: `/api/serveImage/product/${product._id}/${i}/thumb`,
      full: `/api/serveImage/product/${product._id}/${i}/full`,
    }));
  }


  return product;


};

module.exports = mongoose.model("Product", ProductSchema);
