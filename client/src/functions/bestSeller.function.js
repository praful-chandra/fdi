import axios from "axios";
   
export const getBestSeller = async product => {
    try {
        const bestSeller = await axios.get(`/bestseller/${product}`);
        return bestSeller.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const listBestSeller = async (limit,skip) => {
    try {
        const bestSeller = await axios.get(`/bestseller`,{params : {limit,skip}});
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

