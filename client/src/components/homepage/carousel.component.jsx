import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../../sass/modules/homepage/carousel.module.scss";

import BannerMainComponent from "../bannerMain.component";

import { listBanner } from "../../functions/homepage.function";

function carouselComponent() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    listBanner().then(data=>{
        if(data && !data.error){
            setList(data);
        }
    })
  },[])
  return (
    <div className={styles.wrapper}>
      <Carousel infiniteLoop={true} showStatus={false} showThumbs={false}>
        {
            list.map(data=>{
               return <BannerMainComponent banner={data} key={`homepage carousel banner ${data._id}`} />
            })
        }
      </Carousel>
    </div>
  );
}

export default carouselComponent;
