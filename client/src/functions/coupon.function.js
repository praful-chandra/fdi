import axios from "axios";


export const addCoupon = async (coupon) =>{
        try{

            const newCoupon = await axios.post("/coupon",coupon);

            if(newCoupon.data && !newCoupon.data.error){
                return {success : true}
            }

        }catch(err){
            return {error : "Internal Server errror"}
        }
}

export const listCoupon = async() =>{
    try{

        const newCoupon = await axios.get("/coupon");

        if(newCoupon.data && !newCoupon.data.error){
            return newCoupon.data;
        }

    }catch(err){
        return {error : "Internal Server errror"}
    }
}

export const deleteCoupon = async couponId =>{
    try{

        const deletedCoupon = await axios.delete(`/coupon/${couponId}`);

        if(deletedCoupon.data && !deletedCoupon.data.error){
            return {success : true}
        }

    }catch(err){
        return {error : "Internal Server errror"}
    }
}

export const getCoupon = async code =>{
    try{

        const coupon = await axios.get(`/coupon/one/${code}`);

        if(coupon.data && !coupon.data.error){
            return coupon.data;
        }

    }catch(err){
        return {error : "Internal Server errror"}
    }
}