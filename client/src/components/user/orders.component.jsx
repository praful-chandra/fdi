import React,{useState,useEffect} from 'react';
import { listOrders} from "../../functions/order.function";
import styles from "../../sass/modules/userDashboard/orders.module.scss";
import { Table, Tag, Space,Button } from 'antd';
import {EyeOutlined} from "@ant-design/icons";
import moment from "moment";

function ordersComponent() {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        listOrders().then(data=>{
            setOrders(data);
        })
    },[])
    

    const columns = [
        {
            title : "Order Id",
            dataIndex : "orderId",
            key : "Order Id"
        },
        {
            title : "Status",
            dataIndex : "status",
            key : "Status"
        },{
            title : "Payment Status",
            dataIndex : "paymentStatus",
            key :"paymentStatus"
        },{
            title : "Date Created",
            dataIndex :"createdAt",
            key : "Created Date",
            render : (text)=> moment(text).format("MMM D, YYYY")
        },{
            title : "Date Updated",
            dataIndex :"updatedAt",
            key : "Updated Date",
            render : (text)=> moment(text).format("MMM D, YYYY")
        },{
            title : "View Order",
            key : "View Order",
            render : (text,record) => <Button icon={< EyeOutlined />} block type="primary"></Button>
        }
    ]



    return (
        <div className={styles.wrapper} >
            <h2>Orders</h2>
            <Table columns={columns} dataSource={orders} />
            
        </div>
    )
}

export default ordersComponent
