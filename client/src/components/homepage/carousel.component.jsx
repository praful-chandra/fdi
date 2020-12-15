import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../../sass/modules/homepage/carousel.module.scss";

import BannerMainComponent from "../bannerMain.component";

function carouselComponent() {
    return (
        <div className={styles.wrapper}>
           <Carousel infiniteLoop={true}  showStatus={false}  >
                <BannerMainComponent />
                <div className={styles.slide}>
                   
                </div>
                <div className={styles.slide}>
                    
                </div>
            </Carousel>
        </div>
    )
}

export default carouselComponent
