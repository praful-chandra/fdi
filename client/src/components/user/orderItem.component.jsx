import React from 'react'
import {Button,Tag,Divider} from "antd";
import styles from "../../sass/modules/userDashboard/orders.module.scss";
import {Link} from "react-router-dom";
import moment from "moment";
import priceFormatter from "../../functions/priceFormatter";
import {requestReturn} from "../../functions/return.function";
import RenderItemComponent from "./renderItem.component";
function OrderItemComponent({order}) {




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

    return (
        <li className={styles.orderItem}>
                    <div className={styles.orderItemHead}>
                        <div>
                            <span>Order Placed  </span>
                            <span>{moment(order.createdAt).format("MMM D, YYYY")}</span>
                        </div>
                        {
                            order.coupon && (
                                <div>
                            <span>Coupon </span>
                            <span>{order.coupon.code}</span>
                        </div>
                            )
                        }
                        <div>
                            <span>Total  </span>
                            <span>{priceFormatter(order.total)}</span>
                        </div>
                        <div>
                            <span>Order-Id  </span>
                            <span>{order.orderId}</span>
                        </div>
                        <div>
                            <span>Payment Status  </span>
                            <span>
                                <Tag color={renderPaymentColor(order.paymentStatus)}>
                                        {order.paymentStatus}
                                </Tag>
                            </span>
                        </div>
                        <div>
                            <span>Order Status  </span>
                            <span>
                                <Tag color={renderOrderStatusColor(order.status)}>
                                        {order.status}
                                </Tag>
                            </span>
                        </div>
                    </div>


                    <ul className={styles.orderItemSingle} >
                       {
                           order.cart.map(itm=><RenderItemComponent itm={itm} order={order} />)
                       }
                    </ul>
                </li>
    )
}

export default OrderItemComponent
