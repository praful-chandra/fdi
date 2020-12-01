const slugify = require("slugify");
const Product = require("../models/product.model");
const sharp = require("sharp");

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

const resizeImage = (image, size) =>
  new Promise(async (resolve) => {
    const result = await sharp(image.buffer)
      .resize({ width: size, height: size })
      .png()
      .toBuffer();

    resolve(result);
  });

exports.add = async (req, res) => {
  let images = [];

  for (let i in req.files) {
    let obj = {
      thumb: await resizeImage(req.files[i], 500),
      full: await resizeImage(req.files[i], 1080),
    };

    images.push(obj);
  }

  let newBody = {
    name: "",
    model: "",
    sku: "",
    highlights: "",
    description: "",
    category: "",
    subCategory: "",  
    tags: "",
    options: "",
    addOns: "",
    brand : ""
  };

  for(const[key,value] of Object.entries(req.body)){
    newBody[key] = JSON.parse(value);
  }  


  let {
    name,
    model,
    sku,
    highlights,
    description,
    category,
    subCategory,
    tags,
    options,
    addOns,
    brand
  } = newBody;

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
      addOns,
      brand
    }).save();

    res.json(newProduct);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};
