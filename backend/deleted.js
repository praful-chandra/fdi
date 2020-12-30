
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



router.post("/paytm", authCheck, (req, res) => {
  const callBackUrl = "http://localhost:8000/api/payment/patymCallback";
  var params = {};

  /* initialize an array */
  (params["MID"] = PaytmConfig.mid),
    (params["WEBSITE"] = "WEBSTAGING"),
    // params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
    (params["INDUSTRY_TYPE_ID"] = "RETAIL"),
    (params["ORDER_ID"] = req.body.orderId),
    (params["CUST_ID"] = req.body.customerId),
    (params["TXN_AMOUNT"] = req.body.amount),
    (params["CALLBACK_URL"] = callBackUrl),
    (params["EMAIL"] = req.body.email),
    (params["MOBILE_NO"] = `+91${req.body.phone}`);

    let body = {
        mid : PaytmConfig.mid,
        orderId : req.body.orderId
    }

    body =  JSON.stringify(body);
    console.log(body);

  Paytm.generateSignature(body, PaytmConfig.key)
    .then(function (checksum) {
      let paytmParams = {
        ...params,
        CHECKSUMHASH: checksum,  
      };
      res.json(paytmParams);
    })
    .catch((err) => {
      console.log("------------REQUEST-------------");
      console.log(err);
    });
});

  
router.post("/patymCallback",(req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req,(err,fields,file)=>{
        console.log(fields);
        let paytmChecksum = fields.CHECKSUMHASH;
        delete fields.CHECKSUMHASH;

        let isVeryfySignature = Paytm.verifySignature(fields,PaytmConfig.key,paytmChecksum);

        if(isVeryfySignature){
            var paytmParams = {};
            paytmParams["MID"]     = fields.MID;
            paytmParams["ORDERID"] = fields.ORDERID;

            Paytm.generateSignature(paytmParams,PaytmConfig.key).then(function(checksum){
                paytmParams["CHECKSUMHASH"] = checksum;
                var post_data = JSON.stringify(paytmParams);

                var options = {
    
                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',
            
                    /* for Production */
                    // hostname: 'securegw.paytm.in',
            
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function(post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });
            
                    post_res.on('end', function(){
                        res.json(response)
                    });
                });
            
                post_req.write(post_data);
                post_req.end();
            });
        } else {
            console.log("Checksum Mismatched");
        }
    })

    
})





{
  orderAmount: 110000,
  customerId: '5fe07f21cfa9117e349f5452',
  customerName: 'praful',
  customerEmail: 'praful.chandra@gmail.com',
  customerPhone: 9686915430,
  orderId: '3ONO20KJB4R1VY',
  orderCurrency: 'INR',
  orderNote: 'TEST',
  returnUrl: 'http://localhost:8000/payment/callback',
  appId: '47878264ae21e36734aa067e887874',
  signature: '6+eP3fbx2zcEaD0SwlXwjn1ogQPiQVZmf+zWVd2urZk=',
  path: 'https://test.cashfree.com/billpay/checkout/post/submit'
}