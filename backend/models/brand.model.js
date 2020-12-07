const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    logo: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

BrandSchema.methods.toJSON = function () {
  const brand = this.toObject();
  brand.logo = `/api/serveimage/brand/${brand._id}`;

  return brand;
};



module.exports = mongoose.model("Brand", BrandSchema);
