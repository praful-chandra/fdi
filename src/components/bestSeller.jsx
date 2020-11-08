import React from "react";

import styles from "../sass/modules/bestSeller.module.scss";

import SmallProductCard from "./smallProductCard";
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faAngleRight,
 faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
export default function bestSeller() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: isMobile ? <> </> : <SampleNextArrow />,
    prevArrow: isMobile ? <> </> :  <SamplePrevArrow />,
    swipeToSlide: true,
    afterChange: function (index) {
     },
    responsive: [
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        className={`${styles.button} `}
        style={{...style}}
        onClick={onClick}
      >
      <FontAwesomeIcon icon={faAngleRight} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        className={`${styles.buttonLeft} `}
        style={{...style}}
        onClick={onClick}
      >
      <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    );
  }
    const renderCards = () => {
        let data = [];
    
        for (let i = 0; i < 8; i++) {
          data.push(
            <SmallProductCard
              image={`https://source.unsplash.com/collection/${i}`}
              best={true}
            />
          );
        }
    
        return data;
      };


  return (
    <div className={styles.wrapper}>
      <div className="center">
      <div className={styles.head}>
          <div>
          <h5>Best Seller</h5>
          <button>View All</button>
          </div>
        </div>

        <Slider {...sliderSettings}>{renderCards()}</Slider>


      </div>
    </div>
  );
}
