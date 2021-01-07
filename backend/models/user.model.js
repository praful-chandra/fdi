const mongoose = require("mongoose");
const  ObjectId  = mongoose.Schema.Types.ObjectId;

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
      product : {type : ObjectId , ref: "ProductVarianceColor"},
      quantity : {type : Number , default : 1},
      productImage : String,
      addOns : [],
      exchange : {},
      name :String
    }],
    address:[
      {
        firstName : {
          type : String,
          required : true
        },
        lastName : String,
        emailAddress : {
          type : String,
          required : true
        },
        phoneNumber : {
          type : Number,
          required : true
        },
        country : String,
        gst : String,
        address : {
          type : String,
          required : true
        },
        city : String,
        state : String,
        pin : {
          type : String,
          required : true
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
