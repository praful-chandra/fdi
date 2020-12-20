const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      required: true,
      type: String,
      index: true,
    },
    picture: {},
    role: {
      type: String,
      default: "Subscriber",
    },
    address: String,
    wishList: [
      {
        type: ObjectId,
        ref: "ProductVarianceColor", 
      },
    ],
    cart:[{
      product : {type : mongoose.Types.ObjectId , ref: "ProductVarianceColor"},
      quantity : {type : Number , default : 1},
      productImage : String,
      addOns : [],
      exchange : {},
      name :String
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
