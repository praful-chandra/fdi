const express = require("express");
const router = express.Router()


//MiddleWares
const {authCheck,checkPermission} = require("../middlewares/auth.middleware");

//Controllers
const {listReturns,requestReturn,getReturn,removeReturn,changeStatus} = require("../controllers/return.controller");

router.get("/",authCheck,checkPermission("return"),listReturns);
router.post("/updateStatus",authCheck,checkPermission("return"),changeStatus);

router.post("/request",authCheck,requestReturn);
router.post("/get",authCheck,getReturn);
router.post("/delete",authCheck,removeReturn);
module.exports = router;