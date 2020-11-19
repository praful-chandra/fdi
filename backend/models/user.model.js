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
    picture : {} ,
    role: {
      type: String,
      default: "Subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // wishList : [{
    //     type : ObjectId , ref : "product"
    // }]
  },
  { timestamps: true }
);

module.exports= mongoose.model('User',UserSchema);