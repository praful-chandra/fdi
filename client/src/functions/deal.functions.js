import axios from "axios";

export const listDeals = async() =>{
    try{

        const deals = await axios.get("/dow");
        return deals.data;

    }catch(err){
        return {error : "Error occured while fetching data"}
    }
}