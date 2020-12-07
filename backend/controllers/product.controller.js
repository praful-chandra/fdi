const slugify = require("slugify");
const Product = require("../models/product.model");
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
    let { limit, skip, search } = req.query;
    skip = limit * skip;

    const products = await Product.find()
      .limit(parseInt(limit))
      .skip(parseInt(skip))
      .populate(["tags", "category", "subCategory", "brand"]);

    const count = await Product.find().count();
    res.json({ products, totalCount: count });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
    brand: "",
  };

  for (const [key, value] of Object.entries(req.body)) {
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
    brand,
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
      brand,
    }).save();

    res.json(newProduct);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};

exports.update = async (req, res) => {
  try {
    const { slug } = req.params;

    const oldProduct = await Product.findOne({ slug });
    let newImages = [];

    for (let i in req.files) {
      let obj = {
        thumb: await resizeImage(req.files[i], 500),
        full: await resizeImage(req.files[i], 1080),
      };

      newImages.push(obj);
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
      brand: "",
      imageDeleted: [],
    };
    for (const [key, value] of Object.entries(req.body)) {
      newBody[key] = JSON.parse(value);
    }

    let { imageDeleted } = newBody;
    let oldImages = oldProduct.images;

    imageDeleted.map((i) => {
      console.log(oldImages[i]);
      oldImages[i] = null;
    });

    oldImages = oldImages.filter((oi) => oi !== null);

    const images = [...oldImages, ...newImages];

    newBody.images = images;
    newBody.slug = slugify(newBody.name);

    const updatedProduct = await Product.findOneAndUpdate({ slug }, newBody, {
      new: true,
    });

    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};

exports.get = async (req, res) => {
  const { slug } = req.params;

  try {
    let product = await Product.findOne({ slug })
      .populate(["tags", "category", "subCategory"])
      .populate("brand", ["name", "_id", "slug"]);

    product.brand._doc.logo = `/api/serveimage/brand/${product.brand._doc._id}`;

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { slug } = req.params;

    await Product.findOneAndDelete({ slug });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
