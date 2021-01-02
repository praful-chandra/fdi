import React from 'react'
import {Button,Tag,Divider} from "antd";
import styles from "../../sass/modules/userDashboard/orders.module.scss";
import {Link} from "react-router-dom";
import moment from "moment";
import priceFormatter from "../../functions/priceFormatter";
import {requestReturn,getReturn} from "../../functions/return.function";
function OrderItemComponent({order}) {

    const handleRequestReturn = (itm)=>{
       requestReturn(order.orderId,itm).then(res=>{
           if(res.success){
               alert("YEs")
           }
       })
    }

    const renderItem = (itm)=>{
      return getReturn(order.orderId,itm.product.productId).then(isRet=>{
          console.log(isRet);
          return  <li className="row">
          <div className="col-md-2">
              <img src={`${process.env.REACT_APP_API_ROOT_URI}${itm.product.image}`} className={styles.orderItemSingleImage} />
              {
                  order.status === "Delivered" && (<Button onClick={()=>handleRequestReturn(itm)} block >Return</Button>)
              }
          </div>
          <div className={`${styles.orderItemSingleBody} col-md-10`}>
              <span className={styles.orderItemSingleName} >{itm.product.name}</span>
              <div className={styles.orderItemSinglePrice}>
                  {priceFormatter(itm.product.discountPrice > 0 ? itm.product.discountPrice : itm.product.price)}
              </div>
              <div className={styles.orderItemSingleQty}>
                  Qty : <span>{itm.quantity}</span>
              </div>
              {
                  itm.addOns.length > 0 && (<div className={styles.orderItemSingleAddons}>
                      <h4>AddOns</h4>
                      <ul>
                          {
                              itm.addOns.map(adon=><li> {adon.title} : <span>{priceFormatter(adon.price)}</span> </li>)
                          }
                      </ul>
                  </div>)
              }
              {
                  itm.exchange && (<div className={styles.orderItemSingleAddons}>
                      <h4>Exchange</h4>
                      <ul>
                      <li> {itm.exchange.name} : <span>{priceFormatter(itm.exchange.exchangePrice)}</span> </li>
                      </ul>
                  </div>)
              }
          </div>
          <Divider />
      </li>
      })
      
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
                           order.cart.map(itm=>renderItem(itm).then(res=>res))
                       }
                    </ul>
                </li>
    )
}

export default OrderItemComponent
