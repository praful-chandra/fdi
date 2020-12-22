const express = require("express");
const router = express.Router();

//importing Middlewares
const {authCheck,adminCheck} = require('../middlewares/auth.middleware');

//Controllers
const {addToCart,decrement,listCart,WishList,listWishList,deleteCart,addAddress,listAddress}  =require("../controllers/userController");


router.post("/addcart",authCheck,addToCart);
router.post("/decrement",authCheck,decrement);
router.get("/getcart",authCheck,listCart);
router.delete("/cart/:productId",authCheck,deleteCart);
router.post("/wishlist/:productId",authCheck,WishList);
router.get("/wishlist/list",authCheck,listWishList);
router.post("/address",authCheck,addAddress);
router.get("/address/list",authCheck,listAddress)

module.exports = router;