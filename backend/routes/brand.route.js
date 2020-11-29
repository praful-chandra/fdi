const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    limits: {
      fileSize: 1048576
       * 2,
    }
  });

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//Controllers
const {create,list}  = require("../controllers/brand.controller");

router.post('/',authCheck,adminCheck,upload.single('logo'),create);

module.exports = router;