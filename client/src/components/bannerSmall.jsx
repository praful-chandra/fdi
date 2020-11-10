import React from "react";

import styles from "../sass/modules/bannerSmall.module.scss";

import BannerSmallCard from "../components/bannerSmallCard";

export default function bannerSmall() {
  return (
    <div className="center">
      <div className={styles.wrapper}>
        <BannerSmallCard />
        <BannerSmallCard />
      </div>
    </div>
  );
}
