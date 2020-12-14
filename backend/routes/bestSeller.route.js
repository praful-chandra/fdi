const express = require("express");
const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//Controllers
const {add,list,get} = require("../controllers/bestSeller.controller");

router.get("/",list);
router.get("/:product",get);
router.post("/:product",authCheck,adminCheck,add);



module.exports = router;