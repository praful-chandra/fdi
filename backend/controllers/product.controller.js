const { default: slugify } = require("slugify");
const Product = require("../models/product.model");

exports.list = async (req, res) => {
  try {
    const products = await Product.find().populate([
      "tags",
      "category",
      "subCategory",
    ]);
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.add = async (req, res) => {
  // console.log({...req.body , images : []});

  const {
    images,
    name,
    model,
    sku,
    highlights,
    description,
    category,
    subCategory,
    tags,
    options,
    addOn,
  } = req.body;

  try {
    const slug = slugify(name);
    const oldProduct = await Product.findOne({ slug });
    if (oldProduct) {
      return res.status(409).json({ error: "Product already exists !" });
    }

    const newProduct = await new Product({
      name,
      images,
      slug,
      model,
      sku,
      highlights,
      description,
      category,
      subCategory,
      tags,
      options,
      addOn,
    }).save();

    res.json(newProduct);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};
