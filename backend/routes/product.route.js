const express = require("express");
const router = express.Router();

const multer = require("multer");

const upload = multer();

//importing Middlewares
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

//importing controllers
const {
  add,
  list,
  get,
  update,
  remove,
  devAdd,
  getfromcolor,
  getRelated,
  addReview,
  listWithVariance,
  getColor
} = require("../controllers/product.controller");

router.get("/", list);
router.get("/withVariance",listWithVariance);  
router.get("/color/:productId",getColor);
router.get("/:slug", get);

router.post("/", authCheck, checkPermission("Products"), upload.array("images[]", 20), add);
router.patch(
  "/:slug",
  authCheck,
  checkPermission("Products"),
  upload.array("images[]", 20),
  update
);
router.delete("/:slug", authCheck, checkPermission("Products"), remove);
router.post("/dev", authCheck, checkPermission("Products"), devAdd);

router.get("/fromColor/:slug",getfromcolor);
router.get("/related/:slug",getRelated);

router.post("/review/:productId",authCheck,addReview);

module.exports = router;
