const Deal = require("../models/dealOfTheWeek.model");

exports.add = async (req, res) => {
  try {
    const { product, discountPrice } = req.body;

    const oldDeal = await Deal.findOne({product});
    if(oldDeal){
      oldDeal.discountPrice = discountPrice;
      oldDeal.save();
      res.json(oldDeal);
    }else {
      const newDeal = await new Deal({ product, discountPrice }).save();
      res.json(newDeal);
    }

  } catch (err) {
    res.status(500).json({ error: "Add Deal failed!" });
  }
};

exports.list = async (req, res) => {
  try {
    let { limit, skip } = req.query;
    skip = limit * skip;

    const deals = await Deal.find()
      .limit(parseInt(limit))
      .skip(parseInt(skip))
      .populate("product")
      .populate({
        path : "product",
        populate:{
          path : "product"
        }
      })
      .populate({
        path : "product",
        populate:{
          path : "variance"
        }
      });

    const count = await Deal.find().count();
    res.json({ deals, totalCount: count });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { product } = req.params;
    const deletedDeal = await Deal.findOneAndDelete({product});
    res.json(deletedDeal);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Deal remove Failed" });
  }
};

exports.get = async (req,res)=>{
  try{
    const {product} = req.params;

    const deal = await Deal.findOne({product});
    res.json(deal);

  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Deal get Failed" });
  }
}