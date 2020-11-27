const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    text: true,
  },
  slug: {
    type: String,
    index: true,
    unique: true,
    lowercase: true,
    required: true,
  },
  model: { type: String, required: true },
  sku: { type: String, required: true },
  highlights: Array,
  description: {
    type: String,
    required: true,
    text: true,
  },

  images: [{
    thumb : {
      type : Buffer,
      required : true
    },
    full:{
        type : Buffer,
        required : true
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
  tags: [
    {
      type: ObjectId,
      ref: "Tag",
    },
  ],
  options: [
    {
      title: {
        type: String,
        required: true,
      },
      color: [
        {
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
        },
      ],
    },
  ],
  addOn: [
    {
      title: String,
      price: Number,
      details: String,
    },
  ],
});

ProductSchema.methods.toJSON = function () {
  const product = this.toObject();

  product.images = product.images.map((data,i) => ({
    thumb :  `/api/serveImage/product/${product._id}/${i}/thumb`,
    full :  `/api/serveImage/product/${product._id}/${i}/full`,
  }));


  return product;
};

module.exports = mongoose.model("Product", ProductSchema);
 