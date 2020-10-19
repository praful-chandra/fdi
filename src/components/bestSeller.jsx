import React from "react";

import styles from "../sass/modules/bestSeller.module.scss";

import SmallProductCard from "./smallProductCard";

export default function bestSeller() {

    const renderCards = () => {
        let data = [];
    
        for (let i = 0; i < 8; i++) {
          data.push(
            <SmallProductCard
              image={`https://source.unsplash.com/collection/${i}`}
            />
          );
        }
    
        return data;
      };


  return (
    <div className={styles.wrapper}>
      <div className="center">
        <div className={styles.head}>
          <h5>Best Sellers</h5>
          <div></div>
        </div>

        <div className={styles.itemsWrapper}>
                {
                    renderCards()
                }
        </div>

      </div>
    </div>
  );
}
