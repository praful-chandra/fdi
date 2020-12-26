const express = require('express');
const router = express.Router();


//importing Middlewares
const { authCheck, checkPermission } = require("../middlewares/auth.middleware");

//importing controllers
const {
    create,
    update,
    read,
    remove,
    list,
    getByCategory
  } = require("../controllers/subcategory.controller");
  
  //routes
  router.get("/", list);
  router.get("/bycategory",getByCategory);
  router.get("/:slug", read);
  router.post("/", authCheck, checkPermission("SubCategory"), create);
  router.patch("/:slug", authCheck, checkPermission("SubCategory"), update);
  router.delete("/:slug", authCheck, checkPermission("SubCategory"), remove);


module.exports = router;