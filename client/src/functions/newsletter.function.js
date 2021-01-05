import axios from "axios";

export const addNewsLetter = async (email)=>{
    try{

        const res = await axios.post("/newsletter/add",{email});
        
        if(res && res.data){
            return res.data;
        }

    }catch(err){
        return {error : "Internal server error"}
    }
}