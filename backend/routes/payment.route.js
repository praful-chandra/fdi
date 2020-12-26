const express = require("express");
const router = express.Router();
const Paytm = require("paytmchecksum");
const { PaytmConfig } = require("../Paytm/config");
const { authCheck } = require("../middlewares/auth.middleware");
const formidable = require("formidable");

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

module.exports = router;
