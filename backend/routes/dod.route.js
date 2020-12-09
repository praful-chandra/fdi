const express = require('express');
const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//Controllers
const {add,list,remove} = require("../controllers/dealOfTheDay.controller");

router.get('/',list);
router.post("/",authCheck,adminCheck,add);
router.delete("/:id",authCheck,adminCheck,remove);

module.exports = router;