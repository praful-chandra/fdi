import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
// import {  faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import priceFormatter from "../functions/priceFormatter";

import styles from "../sass/modules/smallProductCard.customer.module.scss";

import DealLogo from "../assets/deal_of_the_week.svg";
import BestLogo from "../assets/best_seller.svg"

export default function smallProductCardProduct({ item, deal, best }) {
  const sliceString = (str) => {
    return str;
  };

  const getPrice = () =>{
    if(item.minPrice === item.maxPrice){
      return priceFormatter(item.minPrice);
    }else{
      return <span> {priceFormatter(item.minPrice)} - {priceFormatter(item.maxPrice)}</span>

    }
  }

  return (
    <>
      <div
        className={styles.card}
        title={item.name}
      >
        {deal && (
          <div className={styles.cardBadge}>
            <img src={DealLogo} alt="" />
          </div>
        )}

        {best && (
          <div className={styles.cardBadge}>
            <img src={BestLogo} alt="" />
          </div>
        )} 

        <div className={styles.cardContents}>
          <h3>
            {sliceString(item.name)}{" "}
          </h3>
          <Link to={`/product/${item.slug}`} target="_blank">
          <div className={styles.cardContentsImages}>
            <img
               src={`${process.env.REACT_APP_API_ROOT_URI}${item.images[0].thumb}`}
              //src={image}
              alt="tv1"
            />
          </div>
          </Link>
          <div className={styles.cardContentsBottom}>
            <div>
              <span>{getPrice()}</span>
              <span></span>
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
