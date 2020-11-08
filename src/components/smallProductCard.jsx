import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import priceFormatter from "../helpers/priceformatter";

import styles from "../sass/modules/smallProductCard.module.scss";

export default function smallProductCard({ image, deal, best }) {
  const sliceString = (str) => {
    return str;
  };
  return (
    <>
      <div
        className={styles.card}
        title="Samsung Series 4 T4350 80 Cm (32 Inch) HD Ready LED Smart TV
            (UA32T4350AKXXL, Black)"
      >
        {deal && (
          <div className={styles.cardBadge}>
            <img src={require("../assets/deal_of_the_week.svg")} alt="" />
          </div>
        )}

        {best && (
          <div className={styles.cardBadge}>
            <img src={require("../assets/best_seller.svg")} alt="" />
          </div>
        )}

        <div className={styles.cardContents}>
          <h3>
            {sliceString(`Samsung Series 4 T4350 80 Cm (32 Inch) HD Ready LED Smart TV
            (UA32T4350AKXXL, Black) `)}{" "}
          </h3>
          <div className={styles.cardContentsImages}>
            <img
              // src="https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7100-un43nu7100fxzc-frontblack-99883063?$PD_GALLERY_L_JPG$"
              src={image}
              alt="tv1"
            />
          </div>
          <div className={styles.cardContentsBottom}>
            <div>
              <span>{priceFormatter(Math.round(Math.random() * 155014))}</span>
              <span>{priceFormatter(9999999999)}</span>
            </div>
            <div>
              <div className={styles.addCart}>
                <FontAwesomeIcon icon={emptyHeart} />
              </div>
            </div>
          </div>
          {/* <div className={styles.cardContentsWishList}>
            <FontAwesomeIcon icon={faHeart} />
            <span>Wishlist</span>
          </div> */}
        </div>
      </div>
    </>
  );
}
