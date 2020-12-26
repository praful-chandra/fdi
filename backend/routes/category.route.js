const express = require("express");
const router = express.Router();

//importing Middlewares
const { authCheck, adminCheck ,checkPermission } = require("../middlewares/auth.middleware");

//importing controllers
const {
  create,
  update,
  read,
  remove,
  list,
} = require("../controllers/category.controller");

router.get("/", list);
router.get("/:slug", read);
router.post("/", authCheck, checkPermission("Category"), create);
router.patch("/:slug", authCheck, checkPermission("Category"), update);
router.delete("/:slug", authCheck, checkPermission("Category"), remove);


module.exports = router;