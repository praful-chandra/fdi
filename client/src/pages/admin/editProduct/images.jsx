import React, { useState, useEffect } from "react";

import { PlusSquareFilled } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function images({ products, setProduct }) {
  const [previewImages, setPreviewImages] = useState(false);


  useEffect(()=>{
    const imgs = [];
    products.images.map((img,i)=>{
      imgs.push({...img, index : i})
    });
    setPreviewImages(imgs);
      },[])


  const handleAddNewImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProduct((oldProduct) => ({
        ...oldProduct,
        images: [...oldProduct.images, file],
      }));
      setPreviewImages((oi) => [...oi, URL.createObjectURL(file)]);
    }
  };

  const handleRemoveItem = (index) => {
    if (previewImages[index].thumb) {
      setProduct((oldProduct) =>{
        let deletedImage = oldProduct.imageDeleted;
        deletedImage.push(previewImages[index].index);
        return({
        ...oldProduct,
        imageDeleted: deletedImage,
      })}
      
      );
    }

    setProduct((oldProduct) => ({
      ...oldProduct,
      images: oldProduct.images.filter((im, ind) => index !== ind),
    }));
    setPreviewImages((oldImgs) => {
      return oldImgs.filter((oi, i) => i !== index);
    });
  };

  return (
    <div className={styles.imageWrapper}>
      { previewImages && products.images.map((image, index) => {
        return (
          <img
            src={
              previewImages[index].thumb
                ? `${process.env.REACT_APP_API_ROOT_URI}${previewImages[index].thumb}`
                : previewImages[index]
            }
            key={`Image add ${index}`}
            className={styles.imageItem}
            onDoubleClick={() => handleRemoveItem(index)}
          />
        );
      })}

      <div className={styles.imageAdd}>
        <label>
          <PlusSquareFilled />
          <input
            type="file"
            hidden
            onChange={handleAddNewImage}
            accept="image/x-png,image/jpg,image/jpeg"
          />
        </label>
      </div>
    </div>
  );
}

export default images;
