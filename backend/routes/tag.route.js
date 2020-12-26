const express = require("express");
const router = express.Router();

//importing Middlewares
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

//importing Controllers
const {add,list,remove,update}  = require("../controllers/tag.controller");

//Routes
router.get("/",list);
router.post("/",authCheck,checkPermission("Tags"),add);
router.delete("/:slug",authCheck,checkPermission("Tags"),remove);
router.patch("/:slug",authCheck,checkPermission("Tags"),update);


module.exports = router; 