const express = require('express');
const router = express.Router();


//importing Middlewares
const { authCheck, adminCheck } = require("../middlewares/auth.middleware");

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
  router.post("/", authCheck, adminCheck, create);
  router.patch("/:slug", authCheck, adminCheck, update);
  router.delete("/:slug", authCheck, adminCheck, remove);


module.exports = router;