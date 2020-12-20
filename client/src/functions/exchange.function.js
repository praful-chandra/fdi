import axios from "axios";


export const addExchange = async exchange =>{
    try{

        const newExchange = await axios.post("/exchange",exchange);
        if(newExchange.data){
            return newExchange.data;
        }

    }catch(err){
        return {error : "Internal server error"}
    }
}

export const getExchange = async subCat =>{
    try{

        const exchange = await axios.get(`/exchange/${subCat}`);
        if(exchange.data){
            return exchange.data;
        }

    }catch(err){
        return {error : "Internal server error"}
    }
}