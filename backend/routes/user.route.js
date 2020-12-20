const express = require("express");
const router = express.Router();

//importing Middlewares
const {authCheck,adminCheck} = require('../middlewares/auth.middleware');

//Controllers
const {addToCart,decrement,listCart}  =require("../controllers/userController");


router.post("/addcart",authCheck,addToCart);
router.post("/decrement",authCheck,decrement);
router.get("/getcart",authCheck,listCart);

module.exports = router;