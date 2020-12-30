const express = require("express");
const router  = express.Router();


//MiddleWares
const {authCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addOrder,getOrder,listOrder} = require("../controllers/order.controller");

//Routes

router.post("/",authCheck,addOrder);
router.get("/",authCheck,listOrder);
router.get("/paymentStatus/:orderId",getOrder);

module.exports = router;