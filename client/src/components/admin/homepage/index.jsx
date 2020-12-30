import React, { useState, useEffect } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import BannerMainComponent from "../../bannerMain.component";
import PopupComponent from "../../showPopup.component";
import NewBannerComponent from "./newBanner.component";

import styles from "../../../sass/modules/adminDashboard/homepage.module.scss";
import {listBanner,deleteBanner} from "../../../functions/homepage.function";

function homeComponent() {
  const [popup, setPopup] = useState(false);
  const [list,setList] = useState([]);

  useEffect(()=>{
    listBanner().then(data=>{
      if(data && !data.error){
        setList(data);
      }
    })
  },[popup]);


  const handleDeleteBanner = bannerId =>{
    deleteBanner(bannerId).then(data=>{
      if(data && !data.error){
        alert("SUccessfully deleted !");
        setPopup(true);
        setPopup(false);

      }
    })
  }

  return (
    <div className={styles.wrapper}>
      {popup && (
        <PopupComponent
          child={popup}
          close={() => {
            setPopup(false);
          }}
        />
      )}
      <h2>Home Page</h2>

      <div className={styles.banners}>
        <h3>Banners</h3>
        
        {
          list.map(data=>{
            return <div>
                <BannerMainComponent banner={data} key={`Banner adminpage ${data._id}`} />
                <Button danger onClick={()=>handleDeleteBanner(data._id)} >Delete</Button>
            </div>
          })
        }

        <Button
          icon={<AppstoreAddOutlined />}
          type="primary"
          block
          style={{ marginTop: "2rem" }}
          onClick={()=>setPopup(<NewBannerComponent close={()=>{setPopup(false)}} />)}
        >
          Add New Banner
        </Button>
      </div>
    </div>
  );
}

export default homeComponent;
