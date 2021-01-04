import React, { useState,useEffect } from "react";
import styles from "../../../sass/modules/adminDashboard/orders.module.scss";
import { Menu,Table ,Tag,Button,Select,Input} from "antd";
const {Option} = Select;
const {Search} = Input;
import {EyeTwoTone,SearchOutlined} from "@ant-design/icons";
import moment from "moment";
import priceFormatter from "../../../functions/priceFormatter";
import {getAllOrders,changeOrderStatus,genPdf} from "../../../functions/order.function";
import {useToasts} from "react-toast-notifications";


function index() {
  const [status, setStatus] = useState("all");
  const [orders,setOrders] = useState([]);
  const [flag,setFlag] = useState(false);
  const [statusEnums,setStatusEnums] = useState([]);
  const {addToast} = useToasts();
  const [skip,setSkip] = useState(0);
  const [search,setSearch] = useState("");
    useEffect(() => {
       getAllOrders(status,15,skip,search).then(data=>{
           setOrders(data.orders);
           setStatusEnums(data.statusEnums);
       })
    }, [status,flag,skip,search])

    const handleStatusChange = (orderId,value) =>{
        let confirmFlag = confirm(`Do you want to change status to ${value.toUpperCase()}`)
        if(confirmFlag){
            changeOrderStatus(orderId,value).then(data=>{
                if(data.success){
                    addToast("Status change Success !!!",{appearance : "success" , autoDismiss : true})
                    setFlag(!flag);
                }
            })
        }
    }

  const renderPaymentColor = (status)=>{
    if(status === "paid")
        return "#87d068";
    else if(status === "UnPaid")
        return "magenta";
    else if(status === "failed" || status === "cancelled")
        return "#f50";
    else return "blue";
}



const renderOrderStatusColor = (status)=>{
    switch(status){
        case "Created" : return "cyan";
        case "Processing" : return "magenta";
        case "Packed" : return "lime";
        case "Shipped" : return "green";
        case "Delivered" : return "#87d068";
        case "Failed" : return "#f50";
        case "ReturnRequested" : return "orange";
        case "Returned" : return "#F1CB00"
        default : return "cyan"
    }
}
  const columns = [
  {
      title : "Order Id",
      dataIndex : "orderId",
      key : "orderId"
  },{
    title : "Customer Name",
    key : "custName",
    render : (_,record)=><span>{record.customer.name}</span>
},{
    title : "Date",
    dataIndex : "createdAt",
    key:"date",
    render : (text)=> <span>{moment(text).format("DD,MMM Y")} <br/> {moment(text).format("hh : mm : a")}</span>
  },{
    title : "order Status",
    dataIndex : "status",
    key:"orderStatus",
    render : (text)=> <Tag color={renderOrderStatusColor(text)} >{text}</Tag>
  },{
    title : "Payment Status",
    dataIndex : "paymentStatus",
    key:"paymentStatus",
    render : (text)=> <Tag color={renderPaymentColor(text)} >{text}</Tag>
  },{
    title : "Total Price",
    dataIndex : "total",
    key:"total",
    render : (text)=> <span>{priceFormatter(text)}</span>
  },{
    title : "Quick Action",
    key:"QA",
    render : (_,record)=> <Select onChange={(value)=>handleStatusChange(record.orderId,value)} value={record.status} style={{width : "100%"}} >
        {
            statusEnums.map(se=> se !== "ReturnRequested" && se !== "Created" && <Option value={se}>{se}</Option>)
        }
    </Select>
  },{
    title : "View order",
    key:"view",
    render : (_,record)=> <Button icon={<EyeTwoTone /> } onClick={()=>{genPdf(record.orderId)}} size="large" />
  }

  ]

  return (
    <div className={styles.wrapper}>

      <h1 className={styles.heading}>Orders</h1>
      <br/>
      <Search placeholder="input search text" onSearch={(val)=>{setSearch(val)}} prefix="Order ID # " size="large" enterButton />
    <br/>
        <Menu className={styles.menu} mode="horizontal" selectedKeys={status} onClick={(val)=>{setStatus(val.key); setSkip(0)}}>
          <Menu.Item key={"all"}>All</Menu.Item>
          <Menu.Item key="Processing">Processing</Menu.Item>
          <Menu.Item key="Packed">Packed</Menu.Item>
          <Menu.Item key="Shipped">Shipped</Menu.Item>
          <Menu.Item key="Delivered">Delivered</Menu.Item>
          <Menu.Item key="Failed">Failed</Menu.Item>
          <Menu.Item key="Created">Created</Menu.Item>
        </Menu>

      <div className={styles.body}>
        <Table columns={columns} dataSource={orders} pagination={{position : ["bottomCenter"],pageSize: 15, current : (skip + 1),onChange : (val)=>{setSkip(val - 1)} }} />
      </div>
    </div>
  );
}

export default index;
