const Subcategory = require("../models/subCategory.model");
const Category = require('../models/category.model');
const slugify = require("slugify");

exports.list = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate('parent');
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: "Server error occured !" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;

    if (!parent) {
      return res.status(400).json({ error: "parent category is required !" });
    }

    const slug = slugify(name);
    const oldSubcateogory = await Subcategory.findOne({ slug });
    if (oldSubcateogory) {
      return res.status(409).json({ error: "sub Category already exists !" });
    }

    const newSubCategory = await new Subcategory({ name, slug, parent }).save();
    res.json({
      name: newSubCategory.name,
      _id: newSubCategory._id,
      slug: newSubCategory.slug,
      parent: await Category.findOne({_id : newSubCategory.parent})
    });
  } catch (err) {
      console.log(err);
    res.status(400).json({ error: "Create sub category failed !" });
  }
};


exports.read = async (req, res) => {
    const { slug } = req.params;
    try {
      const subCategory = await Subcategory.findOne({ slug });
      res.json(subCategory);
    } catch (err) {
      res.status(500).json({ error: "Server error occured !" });
    }
  };


  exports.update = async (req, res) => {
    const { slug } = req.params;
    const { name } = req.body;
    try {
      const updatedSubCategory = await Subcategory.findOneAndUpdate(
        { slug },
        { name, slug: slugify(name) },
        { new: true }
      ).populate('parent');
      res.json(updatedSubCategory);
    } catch (err) {
      res.status(500).json({ error: "Update sub category failed!" });
    }
  };
  

  exports.remove = async (req, res) => {
    const { slug } = req.params;
    try {
      const deleted = await Subcategory.findOneAndDelete({ slug });
      res.json(deleted);
    } catch (err) {
      console.log(err);

      res.status(500).json({ error: "delete sub category failed!" });
    }
  };