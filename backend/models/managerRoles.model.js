const mongoose = require("mongoose");


const ManagerRoleSchema = new mongoose.Schema({

    role :{
        type :String,
        required : true,
        unique : true,
        index : true
    }  

},{timestamps : true});

module.exports = mongoose.model("ManagerRole",ManagerRoleSchema);