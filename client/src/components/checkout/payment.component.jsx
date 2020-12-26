import React,{useState,useEffect} from 'react';

import {createOrder,payNow} from "../../functions/order.function";
import post from "../../functions/post.function";

function paymentComponent({cart,address}) {

    useEffect(()=>{
        createOrder(cart,address).then(data=>{
            data = data.order
            let orderObj = {
                amount : data.total,
                customerId : data.customer,
                email : data.address.emailAddress,
                phone : data.address.phoneNumber,
                orderId : data.orderId
            }

            payNow(orderObj).then(pd=>{
                let details = {
                    action : "https://securegw-stage.paytm.in/order/process",
                    params : pd
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

