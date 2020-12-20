
exports.addToCart = async (req, res) => {
  try {
    const { productId, addOns} = req.body;

    const user = await User.findOne({ email: req.user.email });
    const product = await ProductVarianceColor.findById(productId);
    let productImage = `/api/serveImage/product/${product.product}/0/thumb`;
    if (product.quantity < 1) {
      throw new Error("Product Quantity out of stock");
    }

    const existingProduct = user.cart.find(
      (c) => c.product.toString() === productId.toString()
    );

    if (!existingProduct) {
      await User.findByIdAndUpdate(
        user._id,
        { $push: { cart: { product: product._id, quantity: 1,productImage ,addOns } } },
        { new: true }
      );

      res.json({
        success: {
          _id: productId,
          product: product._id,
          price: product.price,
          quantity: 1,
          addOns,
          productImage,
        },
      });
    } else {
      if (product.quantity > existingProduct.quantity) {
        await User.updateOne(
          {
            cart: { $elemMatch: existingProduct },
          },
          {
            $set: {
              "cart.$.product": product._id,
              "cart.$.quantity": existingProduct.quantity + 1,
              "cart.$.productImage" : productImage,
              "cart.$.addOns" : addOns
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
            price: product.price,
            quantity: existingProduct.quantity + 1,
            productImage,
            addOns
          },
        });
      } else {
        throw new Error("Product Quantity out of stock");
      }
    }

    res.send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message || "Some error occured" });
  }
};

exports.decrement = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findOne({ email: req.user.email });

    const existingProduct = user.cart.find(
      (c) => c.product.toString() === productId.toString()
    );

    if (!existingProduct) {
      return res.send();
    } else {
      if (existingProduct.quantity > 1) {
        const updatedCart = await User.updateOne(
          {
            cart: { $elemMatch: existingProduct },
          },
          {
            $set: {
              "cart.$.product": existingProduct.product,
              "cart.$.quantity": existingProduct.quantity - 1,
            },
          },
          {
            new: true,
          }
        );

        res.json(updatedCart);
      } else {
        const deletedCart = await User.findByIdAndUpdate(
          user._id,
          { $pull: { cart: { product: existingProduct.product } } },
          { new: true }
        );

        res.json(deletedCart);
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message || "Some error occured" });
  }
};
