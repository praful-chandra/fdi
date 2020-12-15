import React,{useState,useEffect} from "react";

import { PlusSquareFilled } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function images({ newProduct, setNewProduct  }) {

  const [previewImages,setPreviewImages] = useState([]);
  
  useEffect(()=>{
    if(newProduct.images.length === 0){
      setPreviewImages([]);
    }
  },[])
  

  const handleAddNewImage = (e) => {
      const file = e.target.files[0];
      
    if(file){
      setNewProduct((oldProduct) => ({
        ...oldProduct,
        images: [...oldProduct.images, file],
      }));
      setPreviewImages(oi=>[...oi, URL.createObjectURL(file)])
    }
  };

  const handleRemoveItem = index =>{
      setNewProduct(oldProduct =>({
          ...oldProduct,
          images : oldProduct.images.filter((im,ind)=> index !== ind)
      }));
      setPreviewImages((oldImgs) =>{
          return oldImgs.filter((oi,i)=>i !== index);
      })
  }
  return (
    <div className={styles.imageWrapper}>
      {newProduct.images.map((image, index) => {
          return    <img src={previewImages[index]} key={`Image add ${index}`} className={styles.imageItem} onDoubleClick={()=>handleRemoveItem(index)}  />
          
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
