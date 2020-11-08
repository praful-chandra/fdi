import React from "react";
import priceFormatter from "../helpers/priceformatter";

import styles from "../sass/modules/singleProduct/singleProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShare, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function SinglePriduct() {
  return (
    <div className={`center , ${styles.wrapper}`}>
      <div className={styles.head}>
        <div className={styles.productImage}>
          <div className={styles.productImageGrid}>
            <div>
              <img src="https://source.unsplash.com/random/1" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/2" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/3" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/4" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/5" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/6" alt="" />
            </div>
          </div>
          <div className={styles.productImageMain}>
            <img
              src={require("../assets/fdi_recommended.png")}
              alt=""
              className={styles.productImageMainBadge}
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71h%2BUNWW-xL._SL1500_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.productContent}>
          <h1 className={styles.productContentTitle}>
            Sony Bravia X7002G 108cm (43 inch) Ultra HD (4K) LED Smart TV
          </h1>

          <div className={styles.productContentSKU}>
            <span>Model:</span> 43UN7000PUB <span>SKU:</span> 6417302
          </div>

          <div className={styles.productContentSocial}>
            <div className={styles.productContentSocialRating}>
              {" "}
              <span>4.4</span> <FontAwesomeIcon icon={faStar} />{" "}
            </div>
            <div className={styles.productContentSocialShare}>
              {" "}
              <FontAwesomeIcon icon={faShare} /> Share{" "}
            </div>
            <div className={styles.productContentSocialWishlist}>
              {" "}
              <FontAwesomeIcon icon={faHeart} />{" "}
            </div>
          </div>

          <div className={styles.productContentBefore}>
            <span className={styles.productContentBeforePrice}>
              {priceFormatter(13000)}
            </span>
            <span className={styles.productContentBeforeSave}>
              Save {priceFormatter(100)}
            </span>
          </div>

          <div className={styles.productContentPrice}>
            <span>{priceFormatter(12900)}</span>
            <div className={styles.productContentPriceEMI}>
              EMI starts at ₹1,318. No Cost EMI available
              <span>EMI options</span>
            </div>
          </div>

          <div className={styles.productContentBadge}>
            <div>
              <img src={require("../assets/deal_of_the_week.svg")} alt="" />
              <span>Extra {priceFormatter(2000)} off</span>
            </div>
            <span className={styles.productContentBadgeInfo}>
              * Avail extra discount during checkout
            </span>
          </div>

          <div className={styles.productContentOption}>
            <div className={styles.productContentOptionTitle}>
              Series : <span>FabiaSeries</span>
            </div>
            <div className={styles.productContentOptionGrid}>
              <div className={styles.productContentOptionGridTile}>
                <div className={styles.productContentOptionGridTileName}>
                  Quantum Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
              <div className={`${styles.productContentOptionGridTile} , ${styles.productContentOptionGridTileActive}`}>
              <div className={styles.productContentOptionGridTileName}>
                  Fabia Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(12990)}
                </div>
              </div>
              <div className={styles.productContentOptionGridTile}>
              <div className={styles.productContentOptionGridTileName}>
                  Edge Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
              <div className={styles.productContentOptionGridTile}>
              <div className={styles.productContentOptionGridTileName}>
                  Super Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.productContentOption_alt}></div>
          <div className={styles.productContentHighlight}></div>
        </div>
        <div className={styles.buyProduct}></div>
      </div>
    </div>
  );
}
