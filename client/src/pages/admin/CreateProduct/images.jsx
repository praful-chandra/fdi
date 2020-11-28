import React,{useState} from "react";

import { PlusSquareFilled } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function images({ newProduct, setNewProduct }) {

  const [previewImages,setPreviewImages] = useState([]);
  

  const handleAddNewImage = (e) => {
      const file = e.target.files[0];
      
    setNewProduct((oldProduct) => ({
      ...oldProduct,
      images: [...oldProduct.images, file],
    }));
    setPreviewImages(oi=>[...oi, URL.createObjectURL(file)])
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
          return    <img src={previewImages[index]} className={styles.imageItem} onDoubleClick={()=>handleRemoveItem(index)}  />
          
      })}

      <div className={styles.imageAdd}>
        <label>
        <PlusSquareFilled  />
        <input type="file" hidden onChange={handleAddNewImage} accept="image/x-png,image/jpg,image/jpeg"/>
        </label>
      </div>
    </div>
  );
}

export default images;
