const Brand = require("../models/brand.model");
const slugify = require("slugify");
const sharp = require("sharp");

const resizeImage = (image, size) =>
  new Promise(async (resolve) => {
    const result = await sharp(image.buffer)
      .resize({ width: size, height: size })
      .png()
      .toBuffer();

    resolve(result);
  });

exports.list = async (req, res) => {
  try {
    const brands = await Brand.find();

    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) res.status(200).json({ error: "Name is required" });

    const slug = slugify(name);

    if (await Brand.findOne({ slug }))
      res.status(200).json({ error: "Brand name already exist" });

    const logo = await resizeImage(req.file, 300);

    const newBrand = await new Brand({
      name,
      slug,
      logo,
    }).save();

    res.json(newBrand);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
