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

exports.remove = async (req, res) => {
  try {
    const { slug } = req.params;

    const removedBrand = await Brand.findOneAndDelete({ slug });

    res.json(removedBrand);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) res.status(200).json({ error: "Name is required" });

    const slug = slugify(name);

    const oldBrand = await Brand.findOne({ slug });

    if (oldBrand)
      return res.status(200).json({ error: "Brand name already exist" });

    const logo = await resizeImage(req.file, 300);

    const newBrand = await new Brand({
      name,
      slug,
      logo,
    }).save();

    res.json(newBrand);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;

    if (!name) res.status(200).json({ error: "Name is required" });

    const logo = req.file ? await resizeImage(req.file, 300) : false;

    const updatedBrand = await Brand.findOne({ slug });

    if (!updatedBrand)
      return res.status(304).json({ error: "Brand not found" });

    updatedBrand.name = name;
    updatedBrand.slug = slugify(name);

    if (logo) updatedBrand.logo = logo;

    await updatedBrand.save();

    res.json(updatedBrand);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
