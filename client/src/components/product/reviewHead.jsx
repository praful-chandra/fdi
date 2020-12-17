import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import styles from "../../sass/modules/singleProduct/singleProduct.module.scss";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

import {addReview} from "../../functions/product.function";

function ReviewHead({avg,review , productId , isLoggedIn}) {
  const [isLog,setIsLog] = useState(false);
  const [star, setStar] = useState(0);
  const [comment , setComment] = useState("");

  useEffect(()=>{
    if(review){
        setStar(review.star);
        setComment(review.comment);
    }
  },[review]);

  useEffect(()=>{
      if(isLoggedIn){
          setIsLog(isLoggedIn);
      }
  },[isLoggedIn])

  const handleStarChange = (newRating) => {
    setStar(newRating);
  };

  const handleReviewSubmit = async() =>{
      if(star > 0 && star <= 5 && comment){
          const res = await addReview(productId,{star,comment});
          if(res && !res.error){
              window.location.reload();
          }else{
              alert("Failed");
          }
      }
  }

  return (
    <div className={styles.reviewsHead}>
      <div className={styles.reviewsHeadLeft}>
        <div className={styles.reviewsHeadNumber}>
          <div>
            <span>{avg.avg}</span>
            <StarRatings
              rating={avg.avg > 0 ? avg.avg : 0}
              starRatedColor="#25ACD8"
              
            />
          </div>
          {
            avg.total > 0 ? (<span>Based on {avg.total} reviews</span>) : ( <span>No reviews Yet.</span> )
          }
        </div>
        <div className={styles.reviewsHeadGraph}>
          <div className={styles.reviewsHeadGraphItem}>
            <div className={styles.reviewsHeadGraphItemStar}>
              <span>5</span> <FontAwesomeIcon icon={solidStar} />
            </div>
            <div className={styles.reviewsHeadGraphItemBar}>
              <div
                className={styles.reviewsHeadGraphItemBarProgress}
                style={{ width: `${(avg.res[5] / avg.total)/avg.total * 100}%` }}
              ></div>
            </div>

            <div className={styles.reviewsHeadGraphItemNumber}>{avg.res[5]}</div>
          </div>

          <div className={styles.reviewsHeadGraphItem}>
            <div className={styles.reviewsHeadGraphItemStar}>
              <span>4</span> <FontAwesomeIcon icon={solidStar} />
            </div>
            <div className={styles.reviewsHeadGraphItemBar}>
              <div
                className={styles.reviewsHeadGraphItemBarProgress}
                style={{ width: `${(avg.res[4] / avg.total)/avg.total * 100}%` }}
              ></div>
            </div>

            <div className={styles.reviewsHeadGraphItemNumber}>{avg.res[4]}</div>
          </div>

          <div className={styles.reviewsHeadGraphItem}>
            <div className={styles.reviewsHeadGraphItemStar}>
              <span>3</span> <FontAwesomeIcon icon={solidStar} />
            </div>
            <div className={styles.reviewsHeadGraphItemBar}>
              <div
                className={styles.reviewsHeadGraphItemBarProgress}
                style={{ width: `${(avg.res[3] / avg.total)/avg.total * 100}%` }}
              ></div>
            </div>

            <div className={styles.reviewsHeadGraphItemNumber}>{avg.res[3]}</div>
          </div>

          <div className={styles.reviewsHeadGraphItem}>
            <div className={styles.reviewsHeadGraphItemStar}>
              <span>2</span> <FontAwesomeIcon icon={solidStar} />
            </div>
            <div className={styles.reviewsHeadGraphItemBar}>
              <div
                className={styles.reviewsHeadGraphItemBarProgress}
                style={{ width: `${(avg.res[2] / avg.total)/avg.total * 100}%` }}
              ></div>
            </div>

            <div className={styles.reviewsHeadGraphItemNumber}>{avg.res[2]}</div>
          </div>

          <div className={styles.reviewsHeadGraphItem}>
            <div className={styles.reviewsHeadGraphItemStar}>
              <span>1</span> <FontAwesomeIcon icon={solidStar} />
            </div>
            <div className={styles.reviewsHeadGraphItemBar}>
              <div
                className={styles.reviewsHeadGraphItemBarProgress}
                style={{ width: `${(avg.res[1] / avg.total)/avg.total * 100}%` }}
              ></div>
            </div>

            <div className={styles.reviewsHeadGraphItemNumber}>{avg.res[1]}</div>
          </div>
        </div>
      </div>
      <div className={styles.reviewsHeadRight}>
       {
           isLog ? ( <div className={styles.reviewsNew}>
          <div className={styles.reviewsNewTitle}>Your Review</div>
          <StarRatings
              rating={star}
              changeRating={handleStarChange}
              starRatedColor="#25ACD8"
              starHoverColor="#25abd86e"
              numberOfStars={5}
              name="rating"
            />
          <textarea value={comment} onChange={e=>setComment(e.target.value)} className={styles.reviewsNewText}></textarea>
          <button onClick={handleReviewSubmit}  >Submit Review</button>
        </div>) : (
          <Link to="/login" style={{color : "#25ACD8" , fontWeight : "700"}}>Login to Leave a review</Link>
        )
       }
      </div>
    </div>
  );
}

export default ReviewHead;
