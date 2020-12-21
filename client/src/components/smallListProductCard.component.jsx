import React from "react";
import styles from "../sass/modules/listProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../functions/priceFormatter";
import avgRatings from "../functions/avgRating";
import DealBadge from "../assets/deal_of_the_week.svg";

function smallListProductCardComponent({ product, deal }) {
  console.log(product);
  const avgRev = avgRatings(product.product.product.reviews);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img
          src={`${process.env.REACT_APP_API_ROOT_URI}${product.product.product.images[0].thumb}`}
          alt=""
        />
      </div>
      <div className={styles.wishlist} onClick={() => {}}>
        <FontAwesomeIcon icon={emptyHeart} />
      </div>
      <div
        className={styles.cardContent}
        onClick={() =>
          window.location.replace(`/product/${product.product.slug}`)
        }
      >
        <div className={styles.cardTitle}>
          <h3>
            {`${product.product.product.name} (${product.product.variance.title}) (${product.product.name})`}
          </h3>
        </div>
        <div className={styles.cardRating}>
          <span>{avgRev.avg > 0 ? avgRev.avg : "NA"}</span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.fidBadge}>
          {deal && <img src={DealBadge} alt="deal of the week" />}
        </div>

        <div className={styles.emi}>
          <span>
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>{" "}
          <span> No cost EMI ₹7,324/month.</span> Standard EMI also available
        </div>
        {deal ? (
          <div className={styles.priceBox}>
            <div className={styles.priceBoxSellPrice}>
              {priceFormatter(product.discountPrice)}
            </div>
            <div className={styles.priceBoxCostPrice}>
              <div className={styles.priceBoxCostPriceSave}>
                Save {priceFormatter(product.product.price - product.discountPrice)}
              </div>
              <div className={styles.priceBoxCostPriceWas}>
                was {priceFormatter(product.product.price)}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.priceBox}>
            <div className={styles.priceBoxSellPrice}>
              {priceFormatter(product.product.price)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default smallListProductCardComponent;
