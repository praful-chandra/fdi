const express = require("express");
const router = express.Router()


//MiddleWares
const {authCheck,checkPermission} = require("../middlewares/auth.middleware");

//Controllers
const {listReturns,requestReturn,getReturn} = require("../controllers/return.controller");

router.post("/request",authCheck,requestReturn);
router.post("/get",authCheck,getReturn);

module.exports = router;