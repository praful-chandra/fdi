import React from "react";
import styles from "../sass/modules/bestSeller.module.scss";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SmallProductCardProduct from "./smallProductCartProduct";

export default function bestSeller({items, title, bestBadge }) {
  const renderCards = () => {
    let data = [];

    items.map(itm=>{
      data.push(
        <SmallProductCardProduct
          item={itm}
          best={bestBadge || false}
        />
      );
    })
    return data;
  };

  return (
    <div className={styles.wrapper}>
      <div className="center">
        <div className={styles.head}>
          <div>
            <h5>{title}</h5>
          </div>
        </div>
        <Carousel
          arrows
          slidesPerPage={4}
          slidesPerScroll={2}
          animationSpeed={1500}
          offset={50}
          infinite
          breakpoints={{
            590: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}
        >
          {renderCards()}
        </Carousel>
      </div>
    </div>
  );
}
