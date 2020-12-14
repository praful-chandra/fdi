const express = require('express');
const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//Controllers
const {add,list,remove,get} = require("../controllers/dealOfTheWeek.controller");

router.get('/',list);
router.get('/:product',get);
router.post("/",authCheck,adminCheck,add);
router.delete("/:product",authCheck,adminCheck,remove);

module.exports = router;