const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",

    },
    slug: { type: String, required: true, lowercase: true, index: true,unique : true },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Category',CategorySchema);