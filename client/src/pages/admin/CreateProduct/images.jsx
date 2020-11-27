import React,{useState} from "react";

import { PlusSquareFilled } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function images({ newProduct, setNewProduct }) {

  

  const handleAddNewImage = (e) => {
      const file = e.target.files[0];
      
    setNewProduct((oldProduct) => ({
      ...oldProduct,
      images: [...oldProduct.images, file],
    }));
  };

  const handleRemoveItem = index =>{
      setNewProduct(oldProduct =>({
          ...oldProduct,
          images : oldProduct.images.filter((im,ind)=> index !== ind)
      }))
  }

  return (
    <div className={styles.imageWrapper}>
      {newProduct.images.map((image, index) => {
          const tempFileUrl = URL.createObjectURL(image);
          return    <img src={tempFileUrl} className={styles.imageItem} onDoubleClick={()=>handleRemoveItem(index)}  />
          
      })}

      <div className={styles.imageAdd}>
        <label>
        <PlusSquareFilled  />
        <input type="file" hidden onChange={handleAddNewImage} />
        </label>
      </div>
    </div>
  );
}

export default images;
