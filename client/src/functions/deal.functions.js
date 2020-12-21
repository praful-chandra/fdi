import axios from "axios";

export const listDeals = async(limit,skip) =>{
    try{

        const deals = await axios.get("/dow",{params : {limit,skip}});
        return deals.data;

    }catch(err){
        return {error : "Error occured while fetching data"}
    }
}

export const addDeal = async(deal) =>{
    try{

        const deals = await axios.post("/dow",deal);
        return deals.data;

    }catch(err){
        return {error : "Error occured while fetching data"}
    }
}

export const getDeal = async product =>{
    try{

        const deals = await axios.get(`/dow/${product}`);
        return deals.data;

    }catch(err){
        return {error : "Error occured while fetching data"}
    }
}

export const removeDeal = async product =>{
    try{

        const deals = await axios.delete(`/dow/${product}`);
        return deals.data;

    }catch(err){
        return {error : "Error occured while fetching data"}
    }
}