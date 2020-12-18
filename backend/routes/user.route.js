const express = require("express");
const router = express.Router();

//importing Middlewares
const {authCheck,adminCheck} = require('../middlewares/auth.middleware');

//Controllers
const {addToCart}  =require("../controllers/userController");


router.post("/addcart",authCheck,addToCart);

module.exports = router;