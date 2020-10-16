import React from "react";

import styles from "../sass/modules/offerSlider.module.scss";

export default function offerSlider() {
  return (
    <div className="center">
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h5>Deal of the week</h5>
          <div></div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Deal of the Day</div>

          <div className={styles.cardContents}>
          <h3>
            Samsung Series 4 T4350 80 Cm (32 Inch) HD Ready LED Smart TV
            (UA32T4350AKXXL, Black)
          </h3>
          <div className={styles.cardContentsImages}>
                <img src="https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7100-un43nu7100fxzc-frontblack-99883063?$PD_GALLERY_L_JPG$" alt="tv1"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
