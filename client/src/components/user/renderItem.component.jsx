import React, { useState, useEffect } from "react";
import { Button, Tag, Divider } from "antd";
import styles from "../../sass/modules/userDashboard/orders.module.scss";
import priceFormatter from "../../functions/priceFormatter";
import { getReturn, requestReturn ,deleteReturn} from "../../functions/return.function";

function renderItemComponent({ itm, order }) {
  const [isRet, setIsRet] = useState(null);

  useEffect(() => {
    getReturn(order.orderId, itm.product.productId).then((r) => {
      if (r && !r.err) {
        setIsRet(r.status);
      }
    });
  }, []);

  const handleRequestReturn = (itm) => {
    let flag = confirm("Do you want to return this product ?");
    if (flag) {
      requestReturn(order.orderId, itm).then((res) => {
        if (res.success) {
          window.location.reload();
        }
      });
    }
  };
  const handleRequestCancel  = (itm)=>{
    let flag = confirm("Do you want to cancel this return ?");
    if (flag) {
        deleteReturn(order.orderId, itm).then((res) => {
          if (res.success) {
            window.location.reload();
          }
        });
      }
  }
  return (
    <li className="row">
      <div className="col-md-2">
        <img
          src={`${process.env.REACT_APP_API_ROOT_URI}${itm.product.image}`}
          className={styles.orderItemSingleImage}
        />
        {order.status === "Delivered" && !isRet && (
          <Button onClick={() => handleRequestReturn(itm)} block>
            Return
          </Button>
        )}
        {isRet && (
          <>
            <Tag
              color="#ffbf00"
              style={{ fontSize: "1.5rem", width: "100%", textAlign: "center" }}
            >
              {isRet}
            </Tag>
           {isRet && isRet === "Return Requested" && <p
              style={{
                fontSize: "1.5rem",
                width: "100%",
                textAlign: "center",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={() => handleRequestCancel(itm.product.productId)}
            >
              Cancel
            </p>}
          </>
        )}
      </div>
      <div className={`${styles.orderItemSingleBody} col-md-10`}>
        <span className={styles.orderItemSingleName}>{itm.product.name}</span>
        <div className={styles.orderItemSinglePrice}>
          {priceFormatter(
            itm.product.discountPrice > 0
              ? itm.product.discountPrice
              : itm.product.price
          )}
        </div>
        <div className={styles.orderItemSingleQty}>
          Qty : <span>{itm.quantity}</span>
        </div>
        {itm.addOns.length > 0 && (
          <div className={styles.orderItemSingleAddons}>
            <h4>AddOns</h4>
            <ul>
              {itm.addOns.map((adon) => (
                <li>
                  {" "}
                  {adon.title} : <span>{priceFormatter(adon.price)}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
        {itm.exchange && (
          <div className={styles.orderItemSingleAddons}>
            <h4>Exchange</h4>
            <ul>
              <li>
                {" "}
                {itm.exchange.name} :{" "}
                <span>{priceFormatter(itm.exchange.exchangePrice)}</span>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
      <Divider />
    </li>
  );
}

export default renderItemComponent;
