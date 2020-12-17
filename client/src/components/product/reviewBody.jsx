import React from 'react';
import styles from "../../sass/modules/singleProduct/singleProduct.module.scss";
import StarRatings from "react-star-ratings";
import moment from "moment";


function reviewBody({rating}) {
    return (
        <div className={styles.reviewsBodyItem}>
        <hr />
        <div className={styles.reviewsBodyItemStars}>
          <div>  
          <StarRatings
              rating={rating.star}
              starRatedColor="#25ACD8"
              starDimension="30px"
            />
          </div>
          <span>{rating.postedBy.name}</span>
        </div>
        <div className={styles.reviewsBodyItemDate}>
            {moment(rating.date).format("MMM D, YYYY")}
        </div>
        <p>
         {
             rating.comment
         }
        </p>
      </div>
    )
}

export default reviewBody
