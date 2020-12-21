import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {Button} from "antd";
import styles from "../../sass/modules/cartSlider.module.scss";

import {deleteCart} from "../../redux/actions/cartActions";

function cartSliderItem({ item ,deleteCart}) {
  return (
    <li>
      <div className={styles.thumbItem}>
      <img
        src={`${process.env.REACT_APP_API_ROOT_URI}${item.productImage}`}
        alt={item.name}
        className={styles.thumbImage}
      />
      <div className={styles.thumbText}>
        <p>{item.name}</p>
        {item.addOns.length > 0 && (
          <>
            <span style={{ fontWeight: "600" }}>Addons</span>
            <ul>
              {item.addOns.map((add) => {
                return (
                  <li>
                    <span>{add.title} : </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <p>
          <span style={{ fontWeight: "600" }}>Qty :</span> {item.quantity}
        </p>
      </div>
      </div>
              <Button block danger type="primary" onClick={()=>deleteCart(item.product)}>Remove from cart</Button>
    </li>
  );
}


export default connect(null,{deleteCart})(cartSliderItem)