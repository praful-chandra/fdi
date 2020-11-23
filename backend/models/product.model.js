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

  images: Array,
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
      title: String,
      color: [
        {
          name: String,
          price: Number,
          hex: String,
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

module.exports = mongoose.model("Product", ProductSchema);
