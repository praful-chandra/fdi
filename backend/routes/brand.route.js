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
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

//Controllers
const {create,list,update,remove}  = require("../controllers/brand.controller");

router.get('/',list);
router.post('/',authCheck,checkPermission("Brands"),upload.single('logo'),create);
router.patch('/:slug',authCheck,checkPermission("Brands"),upload.single('logo'),update);
router.delete('/:slug',authCheck,checkPermission("Brands"),remove);

module.exports = router;