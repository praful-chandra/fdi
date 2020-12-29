const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();


//MiddlwWares 
const {authCheck,adminCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addBanner} = require("../controllers/homePage.controller");

router.post("/banner",upload.fields([
    {
        name : "backgroundImage",
    maxCount : 1
    },{
        name : "foregroundImage",
        maxCount : 1
    }
]),addBanner);  


module.exports = router;