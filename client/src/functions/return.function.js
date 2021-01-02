import axios from "axios";


export const requestReturn = async(orderId,product)=>{
    try{

        const result = await axios.post("/return/request",{orderId,product});
        if(result && result.data && !result.error){
            return result.data;
        }

    }catch(err){
        return {error : "Internal server error"}
    }
}

export const getReturn = async (orderId,productId) =>{
    try{
        
        const result = await axios.post("/return/get",{orderId,productId});
        if(result && result.data && !result.error){
            return result.data;
        }

    }catch(err){
        return {error : "Internal server error"}

    }
}