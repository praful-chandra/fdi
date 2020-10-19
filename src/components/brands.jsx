import React from "react";

import styles from "../sass/modules/brands.module.scss"

export default function brands() {

    const logos =[
        "https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-png-transparent.png",
        "https://www.pngarts.com/files/1/Sony-Logo-Free-PNG-Image.jpg",
        "https://www.pngarts.com/files/3/Samsung-Logo-PNG-Transparent-Image.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Whirlpool_Corporation_Logo.png/1200px-Whirlpool_Corporation_Logo.png",
        "https://www.pngarts.com/files/4/LG-PNG-Photo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OnePlus_logo.svg/1280px-OnePlus_logo.svg.png",
        "https://godrejexpert.com/wp-content/uploads/2017/11/cropped-logo-01-1.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png"
    ]

    const renderLogos = ()=>{
           
        return logos.map(l=> <img src={l} alt="hplogo"/>)
    }

  return (
    <div className={styles.wrapper}>
        <div className="center">
        <div className={styles.head}>
          <h5>Brands</h5>
          <div></div>
        </div>

        <div className={styles.logos}>
        {renderLogos()}
        </div>

        </div>
    </div>
  );
}
