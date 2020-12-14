import axios from "axios";

export const getSubCategory = async slug =>{
    try{
        const subCategory = await axios.get("/subcategory/slug");
        return subCategory.data;
    }
    catch(err){
        return {error : "Error occured while fetching data"}
    }
}

export const getSubCategoryByCategory = async category =>{
    try{
        const subCategory = await axios.get(`/subcategory/byCategory?category=${category || ''}`);
        return subCategory.data;
    }
    catch(err){
        return {error : "Error occured while fetching data"}
    }
}