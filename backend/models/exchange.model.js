const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema({
    categoryName : String,
    subCategory :{
        type : mongoose.Types.ObjectId,
        ref : "subCategory"
    },
    type :[
        {
            name  :String,
            exchangePrice : Number
        }
    ],
    maxPrice : Number
});


module.exports = mongoose.model("Exchange",ExchangeSchema);