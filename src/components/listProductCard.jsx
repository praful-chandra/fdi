import React from "react";

import styles from "../sass/modules/listProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../helpers/priceformatter";

export default function listProductCard({image, fdiR}) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>
            Sony Bravia KLV24P413D 24 (60 cm) HD Ready LED TV
          </h3>
          <FontAwesomeIcon icon={emptyHeart} />
        </div>
        <div className={styles.cardRating}>
          <span>4.5</span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.fidBadge}> 
         {
           fdiR &&  <img src={require("../assets/fdi_recommended.png")} alt="" />
         }
        </div>
        <div className={styles.cardFeatures}>
          <ul>
            <li>24 (60 cm) Screen Size</li>
            <li>Clear Resolution Enhancer</li>
            <li>2 x HDMI, 1 x USB</li>
            <li>HD Ready & 1366 x 768 Pixel</li>
            <li>Dolby Digital Sound</li>
          </ul>
        </div>
        <div className={styles.emi}>
          <span>
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>{" "}
          <span> No cost EMI ₹7,324/month.</span> Standard EMI also available
        </div>
        <div className={styles.priceBox}>
          <div className={styles.priceBoxSellPrice}>
            {priceFormatter(Math.round(Math.random() * 155014))}
          </div>
          <div className={styles.priceBoxCostPrice}>
            <div className={styles.priceBoxCostPriceSave}>
              Save {priceFormatter(100)}
            </div>
            <div className={styles.priceBoxCostPriceWas}>
              was {priceFormatter(99999999)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
