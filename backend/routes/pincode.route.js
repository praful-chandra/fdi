const express = require("express");
const router = express.Router();

//Middlewares
const {authCheck,checkPermission} = require("../middlewares/auth.middleware");

//controllers 
const {addPincode,removePincode,updatePincode,checkPincode,listPincodes} = require("../controllers/pincode.controller");

router.get("/",authCheck,checkPermission("pincode"),listPincodes);
router.get("/:pin",checkPincode);
router.post("/",authCheck,checkPermission("pincode"),addPincode);
router.delete("/:groupName",authCheck,checkPermission("pincode"),removePincode);
router.patch("/",authCheck,checkPermission("pincode"),updatePincode);


module.exports = router;