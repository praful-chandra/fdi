const express = require("express");
const router  = express.Router();


//MiddleWares
const {authCheck,adminCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addOrder,getOrder,listOrder,getAllOrders,changeOrderStatus,genPdf} = require("../controllers/order.controller");

//Routes

router.get("/",authCheck,listOrder);
router.get("/paymentStatus/:orderId",getOrder);
router.post("/",authCheck,addOrder);
router.post("/all",authCheck,adminCheck,getAllOrders);
router.post("/changeStatus",authCheck,adminCheck,changeOrderStatus);
router.get("/genInvoice/:orderId",authCheck,genPdf);

module.exports = router;