const Exchange = require("../models/exchange.model");

exports.addExchange = async (req, res) => {
  try {
    const { subCategory, type } = req.body;

    let maxPrice = 0;

    type.map((t) => {
      t.subType.map((st) => {
        if (parseInt(st.exchangePrice) > maxPrice) {
          maxPrice = parseInt(st.exchangePrice);
        }
      });
    });

    const newExchange = await new Exchange({
      subCategory,
      type,
      maxPrice,
    }).save();

    res.json(newExchange);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error has occured !" });
  }
};

exports.deleteExchange = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExchange = await Exchange.findByIdAndDelete(id);

    res.json(deletedExchange);
  } catch (err) {
    res.status(500).json({ error: "An error has occured !" });
  }
};

exports.listExchange = async (req, res) => {
  try {
    const { subCategory } = req.params;

    const exchange = await Exchange.findOne({ subCategory });
    res.json(exchange);
  } catch (err) {
    res.status(500).json({ error: "An error has occured !" });
  }
};

exports.listAllExchange = async (req, res) => {
  try {
    const list = await Exchange.find().populate("subCategory");
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "An error has occured !" });
  }
};

exports.updateExchange = async (req, res) => {
  try {
    const { subCategory, type } = req.body;

    await Exchange.findOneAndUpdate({ subCategory }, { $set: { type } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "An error has occured !" });
  }
};
