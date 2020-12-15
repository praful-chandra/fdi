import React from "react";
import styles from "../sass/modules/offerSlider.module.scss";
import Slider from "react-slick";
import SmallProductCard from "./smallProductCard";
import { isMobile } from "react-device-detect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function offerSlider({ items, deal, title }) {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        className={`${styles.button} `}
        style={{ ...style }}
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
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button> 
    );
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: isMobile ? <> </> : <SampleNextArrow />,
    prevArrow: isMobile ? <> </> : <SamplePrevArrow />,
    swipeToSlide: true,
    afterChange: function (index) {},
    responsive: [
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const renderCards = () => {
    let data = [];

    items.map(itm=>{
      data.push(
        <SmallProductCard
          item={itm}
          deal={deal}
        />
      );
    })

  

    return data;
  };
  return (
    <div className="center">
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div>
            <h5>{title}</h5>
            <button>View All</button>
          </div>
        </div>

        <Slider {...sliderSettings}>{renderCards()}</Slider>
      </div>
    </div>
  );
}
