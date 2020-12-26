const express = require('express');
const router = express.Router();


//importing controllers
const {createOrUpdateUser,currentUser} = require("../controllers/auth.controller");

//importing Middlewares
const {authCheck,adminCheck,managerCheck} = require('../middlewares/auth.middleware');

//test Route
router.get("/test",(req,res)=>{res.json({message : "Auth route test endpoint"})})



router.post("/create-or-update-user",authCheck,createOrUpdateUser);
router.post("/current-user",authCheck,currentUser);
router.post('/current-admin',authCheck,adminCheck,currentUser);
router.post('/current-manager',authCheck,managerCheck,currentUser);


module.exports = router;