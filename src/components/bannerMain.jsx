import React from "react";
import styles from "../sass/modules/bannerMain.module.scss";
import PrimaryButton from "./primaryButton";
export default function BannerMain() {
  return (
    <div className={styles.bannerMain}>
      <div className={`${styles.content} , center`}>
        <div>
          <h1>Get the best offers</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <PrimaryButton title="Shop Now" />
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/fMg6dCwjsy7dmnTG6Wa3pPGP64rA0gUQ4-dWXB-AVc-qi-tZrVoyTGA_fM5ikgnNgmQzlxZQCBw0KIDpAg_Q2vJmKtpUslyVJQg8xBU0BW9A"
            alt="banner"
            
          />
        </div>
      </div>
    </div>
  );
}
