const express = require("express");
const router = express.Router();

//Auth Middlewares
const {checkPermission,authCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addCoupon,deleteCoupon,getCoupon,listCoupons} = require("../controllers/coupon.controller");

router.get("/",authCheck,checkPermission("Coupons"),listCoupons);
router.get("/one/:code",getCoupon);
router.post("/",authCheck,checkPermission("Coupons"),addCoupon);
router.delete("/:couponId",authCheck,checkPermission("Coupons"),deleteCoupon);


module.exports = router;