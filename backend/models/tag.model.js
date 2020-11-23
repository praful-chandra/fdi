const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        index : true
    }
},{
    timestamps : true
});

module.exports  = mongoose.model('Tag',TagSchema);