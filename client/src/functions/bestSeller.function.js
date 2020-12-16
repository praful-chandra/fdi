import axios from "axios";
   
export const getBestSeller = async product => {
    try {
        const bestSeller = await axios.get(`/bestseller/${product}`);
        return bestSeller.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const listBestSeller = async (limit) => {
    try {
        const bestSeller = await axios.get(`/bestseller`,{params : {limit}});
        return bestSeller.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const addBestSeller = async product => {
    try {
        const bestSeller = await axios.post(`/bestseller/${product}`);
        return bestSeller.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

