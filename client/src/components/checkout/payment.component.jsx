import React,{useState,useEffect} from 'react';
import {createOrder,payNow} from "../../functions/order.function";
import post from "../../functions/post.function";
import { Result, Button } from 'antd';
import { useDispatch } from 'react-redux'
import {useHistory} from "react-router-dom";

function paymentComponent({cart,address}) {
    const [status,setStatus] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const placeOrder = async () =>{
        let data = await createOrder(cart,address);
        if(cart.paymentStatus === "COD"){
            setStatus(data);
            window.localStorage.removeItem("cart");
            dispatch({type : "EMPTY_CART"});
        }else{
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
               
                post(details);  
            });
        }

        
    }

    useEffect(()=>{
        placeOrder();
    },[])

    const handleAction = () =>{
        history.push("/user/dashboard");
      }
    

    return (
        <div style={{minHeight : "60vh"}}>
           {
               status && ( <Result
                status="success"
                title="You have successfully placed the order !"
                subTitle={`Order Id: ${status.order.orderId}`} 
                extra={[
                  <Button type="primary" key="console" onClick={handleAction} >
                    Go to Orders
                  </Button>,
                ]}
              />)
           }

        </div>
    )
}

export default paymentComponent

