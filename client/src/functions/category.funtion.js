import axios from 'axios';

export const getCategory = async(slug)=>{
    try{

        const category = await axios.get(`/category/${slug}`);
        return category.data;

    }
    catch(err){
            return {error : "Error occured while fetching data"}
    }
}