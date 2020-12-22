const axios = require("axios");


export const addAddress = async address =>{

    try{

        const res = await axios.post("/user/address",address);
        if(res.data && !res.json){
            return {success : true}
        }

    }catch(err){
        return {error : "Internal Server error"}
    }

}

export const listAddress = async () =>{
    try{

        const res = await axios.get("/address/list");
        if(res.data && !res.json){
            return res.data;
        }

    }catch(err){
        return {error : "Internal Server error"}
    }
}