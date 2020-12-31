import React,{useState,useEffect} from 'react';

import { listOrders} from "../../functions/order.function";
import styles from "../../sass/modules/userDashboard/orders.module.scss";

import OrderItemComponent from "./orderItem.component";

function ordersComponent() {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        listOrders().then(data=>{
            setOrders(data);
        })
    },[])
    


    return (
        <div className={styles.wrapper} >
            
            <h2>Orders</h2>
            
            <ul className={styles.orderList}>
                {
                    orders.map(ord=><OrderItemComponent key={ord._id} order={ord} />)
                }
            </ul>
            
        </div>
    )
}

export default ordersComponent
