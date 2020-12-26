const express = require("express");
const router = express.Router();

const ManagerRole = require("../models/managerRoles.model");

//MiddleWares
const {adminCheck,authCheck} = require("../middlewares/auth.middleware");

router.post("/role",authCheck,adminCheck,async (req,res)=>{
    try{

        const {role} = req.body;

        isExistingRole = await ManagerRole.findOne({role});

        if(isExistingRole){
            await ManagerRole.findOneAndDelete({role});
        }else{
             await new ManagerRole({role}).save();
        }

        res.json({success : true})


    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    }
});


router.get("/roles",authCheck,async (req,res)=>{
    try{

        const roles = await ManagerRole.find();

        res.json(roles);


    }catch(err){
        res.status(500).json({error : "Internal server error"})
    }
})


module.exports = router;