import { Table } from "antd";
import axios from "axios";

export const addProduct = async (product) => {


  return await axios.post("/product", product, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const updateProduct = async (slug,product) =>{
  return await axios.patch(`/product/${slug}`, product, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
}


export const listProduct = async (limit, skip, search) => {
  try {
    const res = await axios.get("/product", { params: { limit, skip ,search } });
    return { success: res.data };
  } catch (err) {
    return { error: "Some error occured" };
  }
};

export const getProduct = async (slug,cb) => {
  cb(true);
  try {
    const res = await axios.get(`/product/${slug}`);

    return { success: res.data };
  } catch (err) {
    return { error: "Some error occured" };
  }
  finally{
    cb(false);
  }
};

export const deleteProduct = async(slug) =>{
  try {
    const res = await axios.delete(`/product/${slug}`);

    if(res.data.success)
    return { success: res.data.success };
  } catch (err) {
    return { error: "Some error occured" };
  }

}

export const getFromColor = async (slug) =>{
  try {
    const res = await axios.get(`/product/fromcolor/${slug}`);
    if(!res.error){
      if(res.data.redirect){
        window.location.href=`${res.data.redirect}`
      }else
      return res.data;
    }
  } catch (err) {
    return { error: "Some error occured" };
  }
}

export const getRelated = async (slug) =>{
  try {
    const res = await axios.get(`/product/related/${slug}`);
    if(!res.error)
    return res.data;
  } catch (err) {
    return { error: "Some error occured" };
  }
}

export const addReview = async (productId,review) =>{
  try{

    const res = await axios.post(`/product/review/${productId}`,review);
    if(!res.error){
      return res.data;
    }

  } catch (err) {
    return { error: "Some error occured" };
  }
}


export const listProductwithVariance = async (limit,skip,search) =>{
  try {
    const res = await axios.get("/product/withVariance", { params: { limit, skip ,search } });
    return { success: res.data };
  } catch (err) {
    return { error: "Some error occured" };
  }
}