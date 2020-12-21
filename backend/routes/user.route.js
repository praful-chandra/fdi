const express = require("express");
const router = express.Router();

//importing Middlewares
const {authCheck,adminCheck} = require('../middlewares/auth.middleware');

//Controllers
const {addToCart,decrement,listCart,WishList,listWishList}  =require("../controllers/userController");


router.post("/addcart",authCheck,addToCart);
router.post("/decrement",authCheck,decrement);
router.get("/getcart",authCheck,listCart);
router.post("/wishlist/:productId",authCheck,WishList);
router.get("/wishlist/list",authCheck,listWishList);

module.exports = router;