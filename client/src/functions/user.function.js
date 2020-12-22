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

        const res = await axios.get("/user/address/list");
        if(res.data && !res.json){
            return res.data;
        }

    }catch(err){
        return {error : "Internal Server error"}
    }
}


export const deleteAddress = async(id)=>{
    try{

        const res = await axios.delete(`/user/address/${id}`);
        if(res.data && !res.json){
            return res.data;
        }

    }catch(err){
        return {error : "Internal Server error"}
    }
}

export const updateAddress = async(id,address)=>{
    try{

        const res = await axios.patch(`/user/address/${id}`,address);
        if(res.data && !res.json){
            return {success : true}
        }

    }catch(err){
        return {error : "Internal Server error"}
    }
}