const Orders = require("../models/order.model");
const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const { authCheck } = require("../middlewares/auth.middleware");
const formidable = require("formidable");
const {appId,secretKey,paths} = require("../CashFree.config.json");
const {signatureRequest1,signatureResponse1} = require("../cashFree.helpers/signatureCreation");
const {transactionStatusEnum,paymentOptions} = require("../cashFree.helpers/enums");


router.post("/cashfree",async(req,res)=>{
    let callBackUrl = process.env.CASHFREE_CALLBACK_URL;
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
        returnUrl : "http://localhost:8000/api/payment/callback",//reqForm.returnUrl,
        notifyUrl : reqForm.notifyUrl
    }

    const signature = signatureRequest1(signatureForm, secretKey);
    signatureForm.signature = signature;

    res.json({
        signatureForm,
        path : paths.test.cashfreePayUrl
    });
    
})

router.post("/callback",async(req,res)=>{
    const txnTypes = transactionStatusEnum;
    const form = new formidable.IncomingForm();

    form.parse(req,async (err,fields,files)=>{
        if(err){
            return res.status(500).json({data:{
                status:"error",
                err: err,
                name: err.name,
                message: err.message,
            }});
        }else{
            try{

                const signature = signatureResponse1(fields, secretKey);
                
               if(signature !== fields.signature){
                return res.status(500).json({data:{
                    status:"error",
                    err: "Signature Mismatch !",
                    name: "Signature Mismatch !",
                    message: "Signature Mismatch !",
                }});
               }else{

                let order = await Orders.findOne({orderId : fields.orderId});
                switch(fields.txStatus){
                    case txnTypes.cancelled :{
                        order.paymentStatus = "cancelled";
                        order.status = "Failed";
                        await order.save();
                        break;
                    }

                    case txnTypes.failed :{
                        order.paymentStatus = "failed";
                        order.status = "Failed";
                        await order.save();
                        break;
                    }
                    case txnTypes.success :{
                        order.paymentStatus = "paid";
                        order.status = "Processing";
                        order.paymentGatewayInformation = {...fields,signature : null};
                        let customer = order.customer;
                        await User.findByIdAndUpdate(customer,{$set :{cart : []}})
                        await order.save();
                    }
                }
                
                return res.redirect(`http://localhost:3000/paymentStatus?order=${fields.orderId}`)


               }

                
            } catch(err){
                return res.status(500).json({data:{
                    status:"error",
                    err: err,
                    name: err.name,
                    message: err.message,
                }});
            }
        }
    })

    
   

})

module.exports = router;
