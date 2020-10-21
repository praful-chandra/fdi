import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../helpers/priceformatter";

import styles from "../sass/modules/smallProductCard.module.scss";

export default function smallProductCard({ image, deal }) {
  return (
    <>
      <div className={styles.card}>
        {deal && <div className={styles.cardBadge}>Deal of the Week</div>}

        <div className={styles.cardContents}>
          <h3>
            Samsung Series 4 T4350 80 Cm (32 Inch) HD Ready LED Smart TV
            (UA32T4350AKXXL, Black)
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
              <div className={styles.mobileWishlist}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className={styles.addCart}>
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
            </div>
          </div>
          <div className={styles.cardContentsWishList}>
            <FontAwesomeIcon icon={faHeart} />
            <span>Wishlist</span>
          </div>
        </div>
      </div>
    </>
  );
}
