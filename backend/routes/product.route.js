const express = require("express");
const router = express.Router();

const multer = require("multer");


const upload = multer({
    limits: {
      fileSize: 1048576
       * 2,
    },
    // fileFilter(req, file, next) {
    //   if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
    //     return next(new Error("only .jpg,jpeg,png files are accepted"));
    //   }
  
    //   next(undefined, true);
    // },
  });

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//importing controllers
const {add,list} = require("../controllers/product.controller");

router.get("/",list);
router.post("/",authCheck,adminCheck,upload.array('images[]',20),add);

module.exports = router;