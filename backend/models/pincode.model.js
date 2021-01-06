const mongoose = require("mongoose");

const PinCodeSchema = new mongoose.Schema({

    pincodes : [{type : String}],
    estTime : {
        type : Number,
        required : true
    },
    groupName :{
        type : String,
        required : true,
        index : true,
        unique : true
    }

},{
    timestamps : true
});

module.exports = mongoose.model("PinCode",PinCodeSchema);