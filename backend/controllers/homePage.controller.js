const sharp = require("sharp");
const {
  homePageBannerModel,
  homePageDealModel,
} = require("../models/homePage.model");
const { rawListeners } = require("../models/user.model");

const resizeImage = (image, width, height) =>
  new Promise(async (resolve) => {
    const result = await sharp(image.buffer)
      .resize(width, height, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255 },
      })
      .toFormat("jpg")
      .toBuffer();

    resolve(result);
  });

exports.addBanner = async (req, res) => {
  try {
    const newBody = {};
    for (const [key, value] of Object.entries(req.body)) {
      newBody[key] = value;
    }

    const backgroundImage = await resizeImage(
      req.files.backgroundImage[0],
      1920,
      500
    );
    const foregroundImage = await resizeImage(
      req.files.foregroundImage[0],
      500,
      500
    );

    const newHomePageBanner = await new homePageBannerModel({
      backgroundImage,
      foregroundImage,
      title: newBody.title,
      description: newBody.description,
    }).save();

    res.json(newHomePageBanner);
  } catch (err) {
    res.status(500).json({ error: "Internal server error !" });
  }
};
