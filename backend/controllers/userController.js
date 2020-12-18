const User = require("../models/user.model");
const ProductVarianceColor = require("../models/productVarianceColor.model");

exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const user = await User.findOne({ email: req.user.email });
    const product = await ProductVarianceColor.findById(productId);

    if (product.quantity < 1) {
      throw new Error("Product Quantity out of stock");
    }

    const existingProduct = user.cart.find(
      (c) => c.product.toString() === productId.toString()
    );

    if (!existingProduct) {
      const newCArt = await User.findByIdAndUpdate(
        user._id,
        { $push: { cart: { product: product._id, quantity: 1 } } },
        { new: true }
      );

      res.json(newCArt);
    } else {
      if (product.quantity > existingProduct.quantity) {
        const updatedCart = await User.update({
          cart: { $elemMatch: existingProduct },
        },{
            $set :{"cart.$.product" : product._id , "cart.$.quantity" : existingProduct.quantity + 1}
        },{
            new : true
        });

        res.json(updatedCart)
      } else {
        throw new Error("Product Quantity out of stock");
      }
    }

    res.send();
  } catch (err) {
    res.status(500).json({ error: err.message || "Some error occured" });
  }
};
