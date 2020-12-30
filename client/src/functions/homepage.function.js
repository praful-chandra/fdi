import axios from "axios";

export const addBanner = async banner =>{
    try{    

        const result = await axios.post("/homepage/banner",banner);
        return result.data;

    }catch(err){
        return{error : "Internal server error"}
    }
}

export const listBanner = async () =>{
    try{    

        const result = await axios.get("/homepage/banner");
        return result.data;

    }catch(err){
        return{error : "Internal server error"}
    }
}

export const deleteBanner = async (bannerId) =>{
    try{    

        const result = await axios.delete(`/homepage/banner/${bannerId}`);
        return result.data;

    }catch(err){
        return{error : "Internal server error"}
    }
}