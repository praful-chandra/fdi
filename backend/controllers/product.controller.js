const slugify = require("slugify");
const Product = require("../models/product.model");
const ProductVariance = require("../models/productVariance.model");
const ProductVarianceColor = require("../models/productVarianceColor.model");
const Deal = require("../models/dealOfTheWeek.model");
const sharp = require("sharp");

const resizeImage = (image, size) =>
  new Promise(async (resolve) => {
    const result = await sharp(image.buffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255 }
      })
      .toFormat('jpg')
      .toBuffer();

    resolve(result);
  });

exports.list = async (req, res) => {
  try {
    let { limit, skip, search } = req.query;
    skip = limit * skip;

    let products = await Product.find()
      .limit(parseInt(limit))
      .skip(parseInt(skip))
      .populate(["tags", "category", "subCategory"])
      .populate("brand", ["name", "_id", "slug"])

    products.map(async p => {
      p._doc.deal = await Deal.findOne({ product: p._id });
    })

    const count = await Product.find().countDocuments();
    res.json({ products, totalCount: count });
  } catch (err) {
    console.log(err);
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

    const newProduct = new Product({
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
      addOns,
      brand,
    });

    let maxPrice = 0;
    let minPrice = 0;

    let variances = [];
    let colors = [];

    options.map(async opt => {
      const newVariance = new ProductVariance({
        product: newProduct._id,
        title: opt.title
      });
      variances.push(newVariance._id);
      colors = [];

      opt.color.map(async col => {
        if (col.price > maxPrice) maxPrice = col.price;
        if (col.price < minPrice) minPrice = col.price;
        const newColor = new ProductVarianceColor({
          product: newProduct._id,
          variance: newVariance._id,
          ...col
        });
        colors.push(newColor._id);
        await newColor.save();
      })

      newVariance.color = colors;
      await newVariance.save();
    })

    newProduct.maxPrice = maxPrice;
    newProduct.minPrice = minPrice;
    newProduct.options = variances;

    await newProduct.save();

    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};

exports.devAdd = async (req, res) => {
  try {

    const newProduct = await new Product({ ...req.body, slug: slugify(req.body.name) }).save();

    res.json(newProduct);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
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
    const options = newBody.options;
    newBody.options = undefined;
    let { imageDeleted } = newBody;
    let oldImages = oldProduct.images;

    imageDeleted.map((i) => {
      oldImages[i] = null;
    });

    oldImages = oldImages.filter((oi) => oi !== null);

    const images = [...oldImages, ...newImages];

    newBody.images = images;
    newBody.slug = slugify(newBody.name);
    


    const updatedProduct = await Product.findOneAndUpdate({ slug }, newBody, {
      new: true,
    });

    await ProductVariance.deleteMany({ product: updatedProduct._id })
    await ProductVarianceColor.deleteMany({ product: updatedProduct._id })

    let maxPrice = 0;
    let minPrice = 0;
    let variances = [];
    let colors = [];


     options.map(async opt => {
      const newVariance = new ProductVariance({
        product: updatedProduct._id,
        title: opt.title
      });
      variances.push(newVariance._id);
      colors = [];

      opt.color.map(async col => {
        if (col.price > maxPrice) maxPrice = col.price;
        if (col.price < minPrice) minPrice = col.price;
        const newColor = new ProductVarianceColor({
          product: updatedProduct._id,
          variance: newVariance._id,
          ...col
        });
        colors.push(newColor._id);
        await newColor.save();
      })

      newVariance.color = colors;
      await newVariance.save();
    })

    updatedProduct.maxPrice = maxPrice;
    updatedProduct.minPrice = minPrice;
    updatedProduct.options = variances;

    await updatedProduct.save();

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
      .populate(["tags", "category", "subCategory","options"])
      .populate("brand", ["name", "_id", "slug"])
      .populate({path : "options" , populate :{path : 'color'}});

    product.brand._doc.logo = `/api/serveimage/brand/${product.brand._doc._id}`;

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { slug } = req.params;

    const deletedProd = await Product.findOneAndDelete({ slug });
    await ProductVariance.deleteMany({ product: deletedProd._id })
    await ProductVarianceColor.deleteMany({ product: deletedProd._id })


    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
