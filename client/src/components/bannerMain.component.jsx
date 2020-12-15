import React from "react";
import styles from "../sass/modules/bannerMain.module.scss";
export default function BannerMain() {
  return (
    <div className={styles.bannerMain}>
      <div className={`${styles.content} , center`}>
        <div>
          <h1>Get the best offers</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div>
          <img
            src="https://i.imgur.com/O1D43CX.png"
            alt="banner"
            
          />
        </div>
      </div>
    </div>
  );
}
