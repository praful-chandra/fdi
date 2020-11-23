const Tag = require("../models/tag.model");
const slugify = require("slugify");

exports.list = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.add = async (req, res) => {
  try {
    const { name } = req.body;

    const newTag = await new Tag({
      name,
      slug: await slugify(name),
    }).save();

    res.json(newTag);
  } catch (err) {
    res.status(500).json({ error: "Create Tag failed" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { slug } = req.params;
    const deletedTag = await Tag.findByIdAndDelete({ slug });
    res.json(deletedTag);
  } catch (err) {
    res.status(500).json({ error: "Remove Tag failed" });
  }
};

exports.update = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const { slug } = req.params;
    const updatedTag = await Tag.findByIdAndUpdate(
      { slug },
      {
        name,
        slug: await slugify(name),
      },
      { new: true }
    );
    res.json(updatedTag);
  } catch (err) {
    res.status(500).json({ error: "Remove Tag failed" });
  }
};
