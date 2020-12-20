import React from "react";
import { Drawer } from "antd";

import styles from "../../sass/modules/cartSlider.module.scss";

import ListItem from "./cartSliderItem";

function cartSlider({ status, setClose, cartItems,width}) {
  return (
    <Drawer
    width={width || "40rem"}
      title="Cart"
      placement="right"
      onClose={setClose}
      visible={status}
      footer={
        <div className={styles.actionButton}>
          <button className="text-center btn btn-primary btn-raised btn-block">
            Go To Cart
          </button>
        </div>
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.body}>
        <ul className={styles.thumbList}>
            {
                cartItems.map(ci=>{
                    return <ListItem item={ci} />
                })
            }
            </ul>
        </div>
      </div>
    </Drawer>
  );
}

export default cartSlider;
