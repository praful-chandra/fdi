const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();


//MiddlwWares 
const {authCheck,adminCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addBanner,listBanner,deleteBanner} = require("../controllers/homePage.controller");

router.post("/banner",authCheck,adminCheck,upload.fields([
    {
        name : "backgroundImage",
    maxCount : 1
    },{
        name : "foregroundImage",
        maxCount : 1
    }
]),addBanner);  

router.get("/banner",listBanner);
router.delete("/banner/:id",authCheck,adminCheck,deleteBanner);



module.exports = router;