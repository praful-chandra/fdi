import React, { useState } from "react";
import { Button } from "antd";
import styles from "../../../sass/modules/adminDashboard/homepage.module.scss";

import uploadBannerPlaceholder from "../../../assets/uploadBanner.png";
import uploadBannerSmallPlaceHolder from "../../../assets/uploadBannerSmall.png";

function newBannerComponent() {
  const [bgImg, setBgImg] = useState(uploadBannerPlaceholder);
  const [itemImg, setItemImg] = useState(uploadBannerSmallPlaceHolder);

  const [data, setData] = useState({
    backgroundImage: "",
    foregroundImage: "",
    title: "",
    description: "",
  });

  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((od) => ({ ...od, [name]: value }));
  };

  const handleBackgroundImage = (e) => {
    if(e.targer.files[0]){}
    let url = URL.createObjectURL(e.target.files[0]);
    setBgImg(url);

    setData((od) => ({ ...od, backgroundImage: e.target.files[0] }));
  };

  const handleItemImage = (e) => {
   if(e.target.files[0]){
    let url = URL.createObjectURL(e.target.files[0]);

    setItemImg(url);

    setData((od) => ({ ...od, backgroundImage: e.target.files[0] }));
   }
  };

  return (
    <div className={styles.newBanner}>
      <div className={styles.newBannerBody}>
        <div className={styles.newBannerBodyBanner}>
          <img src={bgImg} />

          <div className={`${styles.newBannerBodyBannerContent}  center`}>
            <div>
              <h1>
                {/* Get the best offers */}
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleText}
                />
              </h1>
              <h4>
                <textarea
                  name="description"
                  cols="15"
                  rows="3"
                  value={data.description}
                  onChange={handleText}
                ></textarea>
              </h4>
            </div>
            <div>
              <label>
                <img src={itemImg} />
                <input type="file" hidden onChange={handleItemImage} />
              </label>
            </div>
          </div>
        </div>
      </div>
      <label>
        BackgroundImage :
        <input type="file" onChange={handleBackgroundImage} />
      </label>
      <div className={styles.newBannerFooter}>
        <Button type="primary">Save</Button>

        <Button type="primary" danger>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default newBannerComponent;
