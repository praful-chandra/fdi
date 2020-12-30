import React from "react";
import styles from "../sass/modules/bannerMain.module.scss";
export default function BannerMain({banner}) {

  return (
    <div className={styles.bannerMain} 
    style={{
      backgroundImage : `url("${process.env.REACT_APP_API_ROOT_URI}${banner.backgroundImage}")`
    }}
    >
      <div className={`${styles.content} , center`}>
        <div>
          <h1>{banner.title}</h1>
          <h4>{banner.description}</h4>
        </div>
        <div>
          <img
            src={`${process.env.REACT_APP_API_ROOT_URI}${banner.foregroundImage}`}
            alt="banner"
            
          />
        </div>
      </div>
    </div>
  );
}
