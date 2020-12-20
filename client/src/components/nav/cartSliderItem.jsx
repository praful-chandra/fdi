import React, { useState, useEffect } from "react";

import styles from "../../sass/modules/cartSlider.module.scss";

import priceFormatter from "../../functions/priceFormatter";

export default function cartSliderItem({ item }) {
  return (
    <li className={styles.thumbItem}>
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
    </li>
  );
}
