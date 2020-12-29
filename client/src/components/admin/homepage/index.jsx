import React,{useState,useEffect} from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import BannerMainComponent from "../../bannerMain.component";
import PopupComponent from "../../showPopup.component";
import NewBannerComponent from "./newBanner.component";

import styles from "../../../sass/modules/adminDashboard/homepage.module.scss";

function homeComponent() {

    const [popup,setPopup] = useState(false);

  return (
    <div className={styles.wrapper}>
        <PopupComponent 
        child={<NewBannerComponent />}
        />
      <h2>Home Page</h2>

        <div className={styles.banners}>
            <h3>Banners</h3>
        <BannerMainComponent />

        <Button icon={<AppstoreAddOutlined />} type="primary" block style={{marginTop : "2rem"}} >Add New Banner</Button>
        </div>

    </div>
  );
} 

export default homeComponent;
