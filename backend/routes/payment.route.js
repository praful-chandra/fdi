const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/auth.middleware");
const formidable = require("formidable");
const {appId,secretKey,paths} = require("../CashFree.config.json");
const {signatureRequest1} = require("../cashFree.helpers/signatureCreation");

router.post("/cashfree",async(req,res)=>{
    let callBackUrl = "http://localhost:8000/payment/callback";

    let reqForm = req.body;
    
    reqForm.returnUrl = callBackUrl;
    reqForm.appId = appId;
    
    let signatureForm = {
        appId : reqForm.appId,
        orderId : reqForm.orderId,
        orderAmount : reqForm.orderAmount,
        orderCurrency : reqForm.orderCurrency,
        orderNote : reqForm.orderNote,
        customerName : reqForm.customerName,
        customerPhone : reqForm.customerPhone,
        customerEmail : reqForm.customerEmail,
        returnUrl : reqForm.returnUrl,
        notifyUrl : reqForm.notifyUrl
    }

    const signature = signatureRequest1(signatureForm, secretKey);
    reqForm.signature = signature;
    reqForm.path = paths.test.cashfreePayUrl;

    console.log(signature);
    res.json({
        signatureForm,
        path : paths.test.cashfreePayUrl
    });
    
})

router.post("/callback",async(req,res)=>{

})

module.exports = router;
