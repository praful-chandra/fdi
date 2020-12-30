const sharp = require("sharp");
const {
  homePageBannerModel,
  homePageDealModel,
} = require("../models/homePage.model");

const resizeImage = (image, width, height) =>
  new Promise(async (resolve) => {
    const result = await sharp(image.buffer)
      .resize(width, height, {
        fit: "contain",
        background: { r: 000, g: 000, b: 000 ,alpha : 0},
      })
      .toFormat("png")
      .toBuffer();

    resolve(result);
  });

exports.addBanner = async (req, res) => {
  try {
    const newBody = {};
    for (const [key, value] of Object.entries(req.body)) {
      newBody[key] = value;
    }


    const backgroundImage = await resizeImage(
      req.files.backgroundImage[0],
      1920,
      1080
    );
    const foregroundImage = await resizeImage(
      req.files.foregroundImage[0],
      500,
      500
    );

    const newHomePageBanner = await new homePageBannerModel({
      backgroundImage,
      foregroundImage,
      title: newBody.title,
      description: newBody.description,
    }).save();

    res.json(newHomePageBanner);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error !" });
  }
};


exports.listBanner = async (req,res)=>{
  try{

    const listBanner = await homePageBannerModel.find();
    res.json(listBanner);

  }catch(err){
    res.status(500).json({error : "Internal server error"})
  }
}

exports.deleteBanner = async (req,res)=>{
  try{

    const {id} = req.params;

    const deletedBanner = await homePageBannerModel.findByIdAndDelete(id);
    if(deletedBanner){
      res.json({success : true})
    }
    
  }catch(err){
    res.status(500).json({error : "Internal server error"})
  }
}