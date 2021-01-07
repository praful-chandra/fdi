import React, { useState } from "react";
import { Button ,Input} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import styles from "../../../sass/modules/adminDashboard/homepage.module.scss";
import uploadBannerPlaceholder from "../../../assets/uploadBanner.png";
import uploadBannerSmallPlaceHolder from "../../../assets/uploadBannerSmall.png";
import {addBanner} from "../../../functions/homepage.function";

function newBannerComponent({close}) {
  const [bgImg, setBgImg] = useState(uploadBannerPlaceholder);
  const [itemImg, setItemImg] = useState(uploadBannerSmallPlaceHolder);
  const [loading,setLoading] = useState(false);

  const [data, setData] = useState({
    backgroundImage: "",
    foregroundImage: "",
    title: "",
    description: "",
    link : ""
  });

  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((od) => ({ ...od, [name]: value }));
  };

  const handleBackgroundImage = (e) => {
    if(e.target.files[0]){}
    let url = URL.createObjectURL(e.target.files[0]);
    setBgImg(url);

    setData((od) => ({ ...od, backgroundImage: e.target.files[0] }));
  };

  const handleItemImage = (e) => {
   if(e.target.files[0]){
    let url = URL.createObjectURL(e.target.files[0]);

    setItemImg(url);

    setData((od) => ({ ...od, foregroundImage: e.target.files[0] }));
   }
  };

  const handleSave = () =>{
    setLoading(true);
    const formData = new FormData();

    formData.append("backgroundImage",data.backgroundImage);
    formData.append("foregroundImage",data.foregroundImage);
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("link",data.link);

    addBanner(formData).then(res=>{
      if(res && !res.error){
        alert("SUCCESS !");
      }
      setLoading(false);
      close();
    })


  }

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
      <label htmlFor="BackgroundImage" className={styles.inputButton} >
          <UploadOutlined />Upload Background Image
        <input type="file" onChange={handleBackgroundImage} hidden id="BackgroundImage" />
      </label>

    <span>Enter the Link : </span>
    <Input value={data.link} onChange={(e)=>setData(od=>({...od , link : e.target.value }))} />

      <div className={styles.newBannerFooter}>
        <Button type="primary" onClick={handleSave}  >Save</Button>

        <Button type="primary" onClick={close} danger>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default newBannerComponent;
