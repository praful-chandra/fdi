const express = require("express");

const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

const {addExchange,deleteExchange,listExchange} = require("../controllers/exchange.controller");

router.post("/",authCheck,adminCheck,addExchange);
router.delete("/:id",authCheck,adminCheck,deleteExchange);
router.get("/:subCategory",listExchange);


module.exports = router;