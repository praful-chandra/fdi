const express = require("express");
const router = express.Router();

const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 1048576 * 2,
  },
  onFileSizeLimit: function (file) {
    // but res (response) object is not existing here
    file.error = {
      message: "Upload failed",
      status: MARankings.Enums.Status.FILE_TOO_LARGE,
      // status: -6
    };
  },
  onFileUploadComplete: function (file, req, res) {
    if (file.error) {
      res.status(500).json({error : "File to large"});
    }
  },
});

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

module.exports = router;
