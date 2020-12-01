const express = require("express");
const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//importing Controllers
const {add,list,remove,update}  = require("../controllers/tag.controller");

//Routes
router.get("/",list);
router.post("/",authCheck,adminCheck,add);
router.delete("/:slug",authCheck,adminCheck,remove);
router.patch("/:slug",authCheck,adminCheck,update);


module.exports = router; 