import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import styles from "../../sass/modules/singleProduct/singleProduct.module.scss";

import avgRating from "../../functions/avgRating";

import ReviewHead from "./reviewHead";
import ReviewBody from "./reviewBody";

function Review({reviews , productId}) {

  const avgReviews = avgRating(reviews);

  const [count,setCount] = useState(4);

  const {user : {user}} = useSelector(state =>state);
  const [userReview,setUserReview] = useState(null);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const ur = user ? reviews.find(rev => rev.postedBy._id == user._id) : null;
    setUserReview(ur);
    setIsLoggedIn(user ? true : false);
    
  },[user])

  const renderReviews = ()=>{
    const data = [];

    for(let i = 0 ; i <= count && i< reviews.length ; i++){
      data.push(<ReviewBody key={`review body ${i}`} rating={reviews[i]} />)
    }

    return data;
  }


    return (
      <div className="center">
      <div className={styles.reviews}>
        <div className={styles.head}>
          <div>
            <h5>Reviews</h5>
          </div>
        </div>
        
        <ReviewHead avg={avgReviews} review={userReview} isLoggedIn={isLoggedIn} productId={productId}/>

        <div className={styles.reviewsBody}>
         {
           renderReviews()
         }

          
        </div>
       {
         count < reviews.length && <span className={styles.showMore} onClick={()=>setCount(oc=> oc+5)}>Show More</span>
       }
      </div>
    </div>
    )
}

export default Review
