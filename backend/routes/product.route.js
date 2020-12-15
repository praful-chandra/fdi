const express = require("express");
const router = express.Router();

const multer = require("multer");

const upload = multer();

//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

//importing controllers
const {
  add,
  list,
  get,
  update,
  remove,
  devAdd,
  getfromcolor
} = require("../controllers/product.controller");

router.get("/", list);
router.get("/:slug", get);
router.post("/", authCheck, adminCheck, upload.array("images[]", 20), add);
router.patch(
  "/:slug",
  authCheck,
  adminCheck,
  upload.array("images[]", 20),
  update
);
router.delete("/:slug", authCheck, adminCheck, remove);

router.post("/dev", authCheck, adminCheck, devAdd);




router.get("/fromColor/:slug",getfromcolor);

module.exports = router;
