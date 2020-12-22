const express = require("express");
const router = express.Router();

//Auth Middlewares
const {adminCheck,authCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addCoupon,deleteCoupon,getCoupon,listCoupons} = require("../controllers/coupon.controller");

router.get("/",authCheck,adminCheck,listCoupons);
router.get("/one/:code",getCoupon);
router.post("/",authCheck,adminCheck,addCoupon);
router.delete("/:couponId",authCheck,adminCheck,deleteCoupon);


module.exports = router;