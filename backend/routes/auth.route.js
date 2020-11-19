const express = require('express');
const router = express.Router();

//importing controllers
const {createOrUpdateUser} = require("../controllers/auth.controller");

//importing Middlewares
const {authCheck} = require('../middlewares/auth.middleware');

//test Route
router.get("/test",(req,res)=>{res.json({message : "Auth route test endpoint"})})



router.post("/create-or-update-user",authCheck,createOrUpdateUser);


module.exports = router;