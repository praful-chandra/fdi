import React from "react";
import styles from "../sass/modules/offerSlider.module.scss";
import SmallProductCard from "./smallProductCard";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default function offerSlider({ invert, items, deal,best, title }) {

  
  const renderCards = () => {
    let data = [];

    items.map(itm=>{
      data.push(
        <SmallProductCard
          item={itm}
          deal={deal}
          best={best}
        />
      );
    })
    return data;
  };

  const invertStyles = {
    backgroundColor : "#F8F8F8",
    padding : "5rem 0",
    margin : "5rem 0"
  }
 
  return (
    <div style={invert ? {...invertStyles} : {}} >
      <div className="center">
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div>
            <h5>{title}</h5>
            <button>View All</button>
          </div>
        </div>
       <div className={styles.sliderCarousel}>
       <Carousel
        arrows
        slidesPerPage={4}
      slidesPerScroll={2}
      animationSpeed={1500}
      offset={50}
      infinite
      breakpoints={{
        590:{
          slidesPerPage:2,
          arrows : false
        }
      }}
         >
          {
            renderCards()
          }
        </Carousel>
       </div>
      </div>
    </div>
    </div>
  );
}
