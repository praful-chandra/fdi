const mongoose = require("mongoose");

const {ObjectId} = mongoose.Types;

const SubCategorySchema = new mongoose.Schema({

    name :{
        type : String,
        retuired : true
    },
    slug:{
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        index : true
    },
    parent:{
        type : ObjectId,
        ref:'Category',
        required : true
    }

},{
    timestamps : true
});

module.exports = mongoose.model('subCategory',SubCategorySchema);  