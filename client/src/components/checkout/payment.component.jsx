import React,{useState,useEffect} from 'react';
import {createOrder,payNow} from "../../functions/order.function";
import post from "../../functions/post.function";

function paymentComponent({cart,address}) {

    useEffect(()=>{
        createOrder(cart,address).then(data=>{
            data = data.order
            let orderObj = {
                orderAmount : data.total.toString(),
                customerId : data.customer,
                customerName : data.address.firstName,
                customerEmail : data.address.emailAddress,
                customerPhone : data.address.phoneNumber.toString(),
                orderId : data.orderId,
                orderCurrency: "INR",
                orderNote : "TEST",
                notifyUrl : "",
            }
            


            


            payNow(orderObj)
            .then(pd=>{
                let details = {
                    action : pd.path,
                    params : pd.signatureForm
                }

                console.log(details);

                post(details); 
            });

        })
    },[])


    

    return (
        <div>
            Payment

        </div>
    )
}

export default paymentComponent

