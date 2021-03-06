const mongoose = require("mongoose");

const BestSellerSchema = new mongoose.Schema({
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "ProductVarianceColor",
        required:true,
        unique : true,
        index : true
    }
});



module.exports = mongoose.model("BestSeller",BestSellerSchema);