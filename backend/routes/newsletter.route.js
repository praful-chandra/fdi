const express = require("express");
const router = express.Router();
const NewsLetter = require("../models/newsletter.model");
//MiddleWares
const {
  authCheck,
  checkPermission,
} = require("../middlewares/auth.middleware");

router.post("/add", async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await NewsLetter.findOne({ email });

    if (!existingEmail) {
      await new NewsLetter({ email }).save();
    }

    res.json({ success: true });
  } catch (err) {
    res.json({ error: "Internal server error" });
  }
});

router.get("/", authCheck, checkPermission("newsletter"), async (req, res) => {
  try {
    const emails = await NewsLetter.find();

    res.json(emails);
  } catch (err) {
    res.json({ error: "Internal server error" });
  }
});

module.exports = router;
