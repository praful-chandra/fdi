const express = require("express");

const router =  express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//importing controllers
const {add,list} = require("../controllers/product.controller");

router.get("/",list);
router.post("/",authCheck,adminCheck,add);

module.exports = router;