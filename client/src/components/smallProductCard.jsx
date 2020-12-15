import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
// import {  faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import priceFormatter from "../functions/priceFormatter";

import styles from "../sass/modules/smallProductCard.customer.module.scss";

import DealLogo from "../assets/deal_of_the_week.svg";

export default function smallProductCard({ item, deal, best }) {
  const sliceString = (str) => {
    return str;
  };
  return (
    <>
      <div
        className={styles.card}
        title={`${item.product.product.name} (${item.product.product.model}) (${item.product.variance.title}) - ${item.product.name}`}
      >
        {deal && (
          <div className={styles.cardBadge}>
            <img src={DealLogo} alt="" />
          </div>
        )}

        {best && (
          <div className={styles.cardBadge}>
            <img src={require("../assets/best_seller.svg")} alt="" />
          </div>
        )} 

        <div className={styles.cardContents}>
          <h3>
            {sliceString(`${item.product.product.name} (${item.product.product.model}) (${item.product.variance.title}) - ${item.product.name}`)}{" "}
          </h3>
          <Link to={`/product/${item.product.slug}`} target="_blank">
          <div className={styles.cardContentsImages}>
            <img
               src={`${process.env.REACT_APP_API_ROOT_URI}${item.product.product.images[0].thumb}`}
              //src={image}
              alt="tv1"
            />
          </div>
          </Link>
          <div className={styles.cardContentsBottom}>
            <div>
              <span>{priceFormatter(item.discountPrice)}</span>
              <span>{priceFormatter(item.product.price)}</span>
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
