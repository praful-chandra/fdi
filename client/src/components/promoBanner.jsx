import React from "react";
import SmallProductCard from "./smallProductCard";
import styles from "../sass/modules/promoBanner.module.scss";

export default function promoBanner() {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18)",
      }}
    >
      <div className="center">

        <div className={styles.container}>
          <div>
            <img src="https://i.imgur.com/BRt8muy.png" alt="something idk"/>
          </div>


          <div>
          <div className={styles.head}>
          <h5>Refrigerator</h5>
          <div></div>
        </div>

          <div className={styles.cardWrapper}>
            <SmallProductCard   image={`https://source.unsplash.com/collection/${1}`} />
             <SmallProductCard   image={`https://source.unsplash.com/collection/${2}`} />
            {/*<SmallProductCard  image={`https://source.unsplash.com/collection/${3}`} />
            <SmallProductCard   image={`https://source.unsplash.com/collection/${4}`}/>
            <SmallProductCard  image={`https://source.unsplash.com/collection/${5}`} /> */}
          </div>

          </div>
        </div>

      </div>

    </div>
  );
}
