const mongoose = require("mongoose");

const HomePageBannerSchema = new mongoose.Schema({
  backgroundImage: Buffer,
  foregroundImage: Buffer,
  title: String,
  description: String,
});

const HomePageDealSchema = new mongoose.Schema({
  image: Buffer,
  title: String,
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategory",
  },
});

const homePageBannerModel = mongoose.model(
  "HomePageBanner",
  HomePageBannerSchema
);
const homePageDealModel = mongoose.model("HomePageDeal", HomePageDealSchema);

module.exports = {
  homePageBannerModel,
  homePageDealModel,
};
