const { default: slugify } = require("slugify");
const Product = require("../models/product.model");

exports.list = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.add = async (req, res) => {
  const {
    name,
    model,
    sku,
    highlights,
    description,
    category,
    subCategory,
    tags,
    options,
    addOn
  } = req.body;
  try {
    const slug = slugify(name);
    const oldProduct = await Product.findOne({ slug });
    if (oldProduct) {
      return res.status(409).json({ error: "Product already exists !" });
    }

    const newProduct = new Product({
      name,
      slug,
      model,
      sku,
      highlights,
      description,
      category,
      subCategory,
      tags,
      options,
      addOn
    });

    await newProduct.save();
    res.json(newProduct);
  } catch (err) {

    res.status(500).json({ error: "Product creation failed" });
  }
};
