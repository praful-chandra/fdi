const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema({
    subCategory :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "subCategory",
        unique : true,
        index : true
    },
    type :[
        {
            name  :String,
            subType : [{
                name : String,
                exchangePrice : Number
            }]
        }
    ],
    maxPrice : Number
});


module.exports = mongoose.model("Exchange",ExchangeSchema);