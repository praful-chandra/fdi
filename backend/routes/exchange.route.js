const express = require("express");

const router = express.Router();

//importing Middlewares
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

const {addExchange,deleteExchange,listExchange,listAllExchange,updateExchange} = require("../controllers/exchange.controller");

router.post("/",authCheck,checkPermission("exchange"),addExchange);
router.delete("/:id",authCheck,checkPermission("exchange"),deleteExchange);
router.get("/:subCategory",listExchange);
router.get("/",authCheck,checkPermission("exchange"),listAllExchange);
router.patch("/",authCheck,checkPermission("exchange"),updateExchange);
module.exports = router;