import React,{useState,useEffect} from 'react'
import { Result, Button } from 'antd';
import {getOrder} from "../functions/order.function";

function paymentStatusPage(props) {

    const [order,setOrder] = useState(null);

    useEffect(()=>{
        let query = props.location.search;
        query = query.split("=")[1];

        getOrder(query).then(data=>{
            if(!data.error){
                setOrder(data);
            }
        })

    },[])

    const handleAction = () =>{
      props.history.push("/user/dashboard");
    }

    
    const renderData = () =>{
        switch(order.paymentStatus){
            case "UnPaid" : {
                return  <Result
                status="warning"
                title="The payment Didnt process"
                subTitle={`Order Id: ${order.orderId}`} 
                extra={[
                  <Button type="primary" key="console" onClick={handleAction} >
                    Go to Orders
                  </Button>,
                ]}
              />
            }

            case "cancelled" :{
                return <Result
                title="The payment was Cancelled"
                subTitle={`Order Id: ${order.orderId}`} 
                extra={[
                  <Button type="primary" key="console" onClick={handleAction} >
                    Go to Orders
                  </Button>,
                ]}
              />
            }

            case "failed" : {
                return  <Result
                status="error"
                title="The payment Failed !"
                subTitle={`Order Id: ${order.orderId}`} 
                extra={[
                  <Button type="primary" key="console" onClick={handleAction} >
                    Go to Orders
                  </Button>,
                ]}
              />
            }

            case "paid" : {
                window.localStorage.removeItem("cart");
                return  <Result
                status="success"
                title="The payment was Successful !"
                subTitle={`Order Id: ${order.orderId}`} 
                extra={[
                  <Button type="primary" key="console" onClick={handleAction} >
                    Go to Orders
                  </Button>,
                ]}
              />
            }

        }
    }

    return (
        <div>
             {
                 order && renderData()
             }
        </div>
    )
}

export default paymentStatusPage
