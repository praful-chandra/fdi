const express = require("express");
const router  = express.Router();


//MiddleWares
const {authCheck} = require("../middlewares/auth.middleware");

//Controllers
const {addOrder} = require("../controllers/order.controller");

//Routes

router.post("/",authCheck,addOrder);

module.exports = router;