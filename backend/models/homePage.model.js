const mongoose = require("mongoose");

const HomePageBannerSchema = new mongoose.Schema({
  backgroundImage: Buffer,
  foregroundImage: Buffer,
  title: String,
  description: String,
  link : String
});

const HomePageDealSchema = new mongoose.Schema({
  image: Buffer,
  title: String,
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategory",
  },
});


HomePageBannerSchema.methods.toJSON = function(){
  const banner = this.toObject();

  if(banner.backgroundImage){
    banner.backgroundImage = `/api/serveImage/homepage/${banner._id}/banner/background`
  }

  if(banner.foregroundImage){
    banner.foregroundImage = `/api/serveImage/homepage/${banner._id}/banner/foreground`
  }

  return banner;

}

const homePageBannerModel = mongoose.model(
  "HomePageBanner",
  HomePageBannerSchema
);
const homePageDealModel = mongoose.model("HomePageDeal", HomePageDealSchema);

module.exports = {
  homePageBannerModel,
  homePageDealModel,
};
