const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const Brand = require("../models/brand.model");
const {
  homePageBannerModel,
  homePageDealModel,
} = require("../models/homePage.model");

router.get("/product/:id/:index/:type", async (req, res) => {
  const { id, index, type } = req.params;
  try {
    let imageBuffer = await Product.findById(id, { images: 1 });
    imageBuffer = imageBuffer.images[index][type];

    const img = Buffer.from(imageBuffer, "base64");

    res.writeHead(200, {
      "Content-Type": "image/jpg",
      "Content-Length": img.length,
    });
    res.end(img);
  } catch (err) {
    res.status(404).send({ error: "Not found" });
  }
});

router.get("/brand/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let imageBuffer = await Brand.findById(id, { logo: 1 });
    imageBuffer = imageBuffer.logo;

    const img = Buffer.from(imageBuffer, "base64");

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": img.length,
    });
    res.end(img);
  } catch (err) {
    res.status(404).send({ error: "Not found" });
  }
});

router.get("/homepage/:id/:type/:position", async (req, res) => {
  const { id, type, position } = req.params;

  try {
    if (type === "banner") {
      let imageBuffer = await homePageBannerModel.findById(id);
      if (position === "background") {
        imageBuffer = imageBuffer.backgroundImage;
      } else {
        imageBuffer = imageBuffer.foregroundImage;
      }
      const img = Buffer.from(imageBuffer, "base64");

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": img.length,
      });
      res.end(img);
    }
  } catch (err) {
    res.status(404).send({ error: "Not found" });
  }
});


module.exports = router;
