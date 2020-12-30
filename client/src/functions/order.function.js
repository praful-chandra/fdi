import axios from "axios";


export const createOrder = async(cart,address) => {
    try{

        const newOrder = await axios.post("/order",{cart,address});
        
        if(!newOrder.error){
            return newOrder.data;
        }

    }catch(err){
        return {error : "Internal Server Error"}
    }
}

export const payNow = async(orderDets) =>{
    try{

        const paytm = await axios.post("/payment/cashfree",orderDets);
        
        if(!paytm.error){
            return paytm.data;
            // axios.post("https://securegw-stage.paytm.in/order/process",paytm.data);
        }

    }catch(err){
        return {error : "Internal Server Error"}
    }
}