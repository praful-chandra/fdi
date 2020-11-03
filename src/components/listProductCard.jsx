import React from "react";

import styles from "../sass/modules/listProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function listProductCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>Sony Bravia KLV24P413D 24 (60 cm) HD Ready LED TV</h3>
          <FontAwesomeIcon icon={emptyHeart} />
        </div>
        <div className={styles.cardRating}>
          <span>4.5</span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.fidBadge}></div>
        <div className={styles.cardFeatures}>
          <ul>
            <li>24 (60 cm) Screen Size</li>
            <li>Clear Resolution Enhancer</li>
            <li>2 x HDMI, 1 x USB</li>
            <li>HD Ready & 1366 x 768 Pixel</li>
            <li>Dolby Digital Sound</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
