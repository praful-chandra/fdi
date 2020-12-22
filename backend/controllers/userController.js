const User = require("../models/user.model");
const ProductVarianceColor = require("../models/productVarianceColor.model");
const ProductVariance = require("../models/productVariance.model");
const Product = require("../models/product.model");

exports.addToCart = async (req, res) => {
  try {
    const { productId, addOns, quantity, exchange } = req.body;
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      throw new Error("Not Authorized");
    }
    const product = await ProductVarianceColor.findById(productId);
    const mainProduct = await Product.findById(product.product, { images: 0 });
    const variance = await ProductVariance.findById(product.variance);
    let productImage = `/api/serveImage/product/${product.product}/0/thumb`;
    if (product.quantity < quantity) {
      throw new Error("Product Quantity out of stock");
    }
    const existingProduct = user.cart.find(
      (c) => c.product.toString() === productId.toString()
    );

    if (!existingProduct) {
      await User.findByIdAndUpdate(
        user._id,
        {
          $push: {
            cart: {
              product: product._id,
              quantity,
              productImage,
              addOns,
              exchange,
            },
          },
        },
        { new: true }
      );

      res.json({
        success: {
          _id: productId,
          product: product._id,
          slug: product.slug,
          name: `${mainProduct.name}(${variance.title})(${product.name})`,
          price: product.price,
          quantity,
          addOns,
          productImage,
        },
      });
    } else {
      await User.updateOne(
        {
          cart: { $elemMatch: existingProduct },
        },
        {
          $set: {
            "cart.$.product": product._id,
            "cart.$.quantity": quantity,
            "cart.$.productImage": productImage,
            "cart.$.addOns": addOns,
            "cart.$.exchange": exchange,
            "cart.$.name": `${mainProduct.name}(${variance.title})(${product.name})`,
          },
        },
        {
          new: true,
        }
      );

      res.json({
        success: {
          _id: existingProduct._id,
          product: product._id,
          slug: product.slug,
          name: `${mainProduct.name}(${variance.title})(${product.name})`,
          price: product.price,
          quantity: quantity,
          productImage,
          addOns,
          exchange,
        },
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message || "Some error occured" });
  }
};

exports.decrement = async (req, res) => {
  res.send();
};

exports.listCart = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }, { cart: 1 })
      .populate({ path: "cart", populate: { path: "product" } })
      .populate({ path: "cart.product", populate: { path: "product" } })
      .populate({ path: "cart.product", populate: { path: "variance" } });
    if (user.cart) {
      const finalCart = user.cart.map((uc) => ({
        quantity: uc.quantity,
        _id: uc._id,
        product: uc.product._id,
        slug: uc.product.slug,
        name: `${uc.product.product.name} (${uc.product.variance.title}) (${uc.product.name})`,
        price: uc.product.price,
        productImage: uc.productImage,
        addOns: uc.addOns,
        exchange: uc.exchange,
      }));
      res.json(finalCart);
    } else {
      throw new Error("Authentication Error");
    }
  } catch (err) {
    res.status(500).json({ error: err.message || "Some error occured" });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $pull: { cart: { product: productId } },
      }
    );
    res.json({ success: true });
  } catch (err) {
    res, status(500).json({ error: "Internal server error" });
  }
};

exports.WishList = async (req, res) => {
  try {
    const { productId } = req.params;
    const user = await User.findOne({ email: req.user.email });
    let isExist = user.wishList.find(
      (w) => w.toString() === productId.toString()
    );

    if (isExist) {
      await User.findByIdAndUpdate(user._id, {
        $pull: { wishList: productId },
      });
      res.json({ success: true });
    } else {
      await User.findByIdAndUpdate(user._id, {
        $push: { wishList: productId },
      });
      res.json({ success: true });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.listWishList = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email })
      .populate("wishList")
      .populate({ path: "wishList", populate: { path: "product" } })
      .populate({ path: "wishList", populate: { path: "variance" } });
    if (user.wishList) {
      const finalCart = user.wishList.map((uc) => ({
        product: uc._id,
        name: `${uc.product.name} (${uc.variance.title}) (${uc.name})`,
        price: uc.price,
        productImage: `/api/serveImage/product/${uc.product._id}/0/thumb`,
        slug: uc.slug
      }));
      res.json(finalCart);
    } else {
      throw new Error("Authentication Error");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.addAddress = async (req, res) => {
  try {

    let {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      country,
      gst,
      address,
      city,
      state,
      pin
    } = req.body;

    phoneNumber = phoneNumber.substring(0,3) === "+91" ? parseInt(phoneNumber.substring(3)) : parseInt(phoneNumber);
    console.log(phoneNumber);

    const user = await User.findOneAndUpdate({email : req.user.email},{$push : {address : {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      country,
      gst,
      address,
      city,
      state,
      pin
    }}});

    res.json({success : true});
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
}

exports.listAddress = async (req,res)=>{
  try{
    const address = await User.findOne({email : req.user.email},{address : 1});

    res.json(address.address);

  }catch (err) {
    // console.log(err);
    res.status(500).json({ error: "Internal server error" })
  }
}