const express = require('express');
const router = express.Router();

//importing Middlewares
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

//Controllers
const {add,list,remove,get} = require("../controllers/dealOfTheWeek.controller");

router.get('/',list);
router.get('/:product',get);
router.post("/",authCheck,checkPermission("Deal of the Week"),add);
router.delete("/:product",authCheck,checkPermission("Deal of the Week"),remove);

module.exports = router;