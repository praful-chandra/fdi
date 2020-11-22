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