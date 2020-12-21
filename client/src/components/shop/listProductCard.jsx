import React, { useState, useEffect } from "react";
import { useSelector,connect } from "react-redux";
import styles from "../../sass/modules/listProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../../functions/priceFormatter";
import avgRatings from "../../functions/avgRating";
import FDIRecommendedBadge from "../../assets/fdi_recommended.png";
import BestSellerBadge from "../../assets/best_seller.svg";
import DealBadge from "../../assets/deal_of_the_week.svg";
import { getDeal } from "../../functions/deal.functions";
import { statusFdiR } from "../../functions/fdir.function";
import { getBestSeller } from "../../functions/bestSeller.function";
import {toggleWishlist} from "../../redux/actions/wishListActions";

 function listProductCard({ product ,toggleWishlist}) {
  const avgRev = avgRatings(product.product.reviews);

  const [deal, setDeal] = useState(null);
  const [isFdir, setIsFdir] = useState(false);
  const [isBest, setIsBest] = useState(false);

  const { wishList } = useSelector((state) => state);

  useEffect(() => {
    getDeal(product._id).then((res) => {
      if (res && !res.error) {
        setDeal(res);
      }
    });

    statusFdiR(product._id).then((res) => {
      if (res && !res.error) {
        setIsFdir(res);
      } else {
        getBestSeller(product._id).then((res) => {
          if (res && !res.error) {
            setIsBest(true);
          }
        });
      }
    });
  }, [product]);

  const renderHighlights = () => {
    let data = [];

    for (let i = 0; i < 4 && i < product.product.highlights.length; i++) {
      data.push(<li>{product.product.highlights[i].substring(0, 25)}</li>);
    }
    return data;
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img
          src={`${process.env.REACT_APP_API_ROOT_URI}${product.product.images[0].thumb}`}
          alt=""
        />
      </div>
      <div className={styles.wishlist} style={{color : wishList.find((wl) => wl.product.toString() === product._id.toString()) ? "red" : "#000" }} onClick={() => {toggleWishlist(product._id)}}>
        <FontAwesomeIcon
          icon={
            wishList.find((wl) => wl.product.toString() === product._id.toString())
              ? solidHeart
              : emptyHeart
          }
        />
      </div>
      <div
        className={styles.cardContent}
        onClick={() => window.location.replace(`/product/${product.slug}`)}
      >
        <div className={styles.cardTitle}>
          <h3>
            {`${product.product.name} (${product.variance.title}) (${product.name})`}
          </h3>
        </div>
        <div className={styles.cardRating}>
          <span>{avgRev.avg > 0 ? avgRev.avg : "NA"}</span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.fidBadge}>
          {isFdir && <img src={FDIRecommendedBadge} alt="" />}
          {!isFdir && isBest && <img src={BestSellerBadge} />}
        </div>
        <div className={styles.cardFeatures}>
          <ul>{renderHighlights()}</ul>
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
              {priceFormatter(deal.discountPrice)}
            </div>
            <div className={styles.priceBoxCostPrice}>
              <div className={styles.priceBoxCostPriceSave}>
                Save {priceFormatter(product.price - deal.discountPrice)}
              </div>
              <div className={styles.priceBoxCostPriceWas}>
                was {priceFormatter(product.price)}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.priceBox}>
            <div className={styles.priceBoxSellPrice}>
              {priceFormatter(product.price)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default connect(null,{toggleWishlist})(listProductCard)