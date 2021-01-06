import React from "react";
import {useSelector} from "react-redux";
import styles from "../sass/modules/brands.module.scss"
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


export default function brands() {
    const {brand : {brands : brandList}} = useSelector(state => state);



  return (
    <div className={styles.wrapper}>
        <div className="center">
        <div className={styles.head}>
          <h5>Brands</h5>
          {/* <div></div> */}
        </div>

        <div className={styles.logos}>

        <Carousel
          arrows
          slidesPerPage={8}
          slidesPerScroll={2}
          animationSpeed={1500}
          offset={50}
          infinite
          breakpoints={{
            590: {
              slidesPerPage: 4,
              arrows: false,
            },
          }}
        >
          { brandList.map(l=> <img style={{width : "20rem"}} src={`${process.env.REACT_APP_API_ROOT_URI}${l.logo}`} alt={l.name}/>)}
        </Carousel>
        
        </div>

        </div>
    </div>
  );
}