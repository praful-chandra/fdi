const Category = require("../models/category.model");
const slugify = require("slugify");

exports.list = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Server error occured !" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name);
    const oldCategory = await Category.findOne({ slug });
    if (oldCategory) {
      res.status(409).json({ error: "Category already exists !" });
      return;
    }

    const newCategory = await new Category({ name, slug }).save();
    res.json(newCategory);
  } catch (err) {
    res.status(400).json({ error: "Create category failed !" });
  }
};

exports.read = async (req, res) => {
  const { slug } = req.params;
  try {
    const category = await Category.findOne({ slug });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: "Server error occured !" });
  }
};
exports.update = async(req, res) => {
    const { slug } = req.params;
    const {name} = req.body;
  try {
    const updatedCategory =  await Category.findOneAndUpdate({slug},{name , slug : slugify(name)},{new : true});
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ error: "Update category failed!" });
  }
};

exports.remove = async (req, res) => {
  const { slug } = req.params;
  try {
    const deleted = await Category.findOneAndDelete({ slug });
    res.json(deleted)
  } catch (err) {
    res.status(500).json({ error: "delete category failed!" });
  }
};
