import axios from "axios";

export const getFdiR = async product => {
    try {
        const fdir = await axios.get(`/fdir/${product}`);
        return fdir.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const listFdiR = async () => {
    try {
        const fdir = await axios.get(`/fdir`);
        return fdir.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const addFdiR = async product => {
    try {
        const fdir = await axios.post(`/fdir/${product}`);
        return fdir.data;
    } catch (err) {
        return { error: "Some error had occured" }
    }
}

export const statusFdiR = async product => {
    try {
        const fdir = await axios.get(`/fdir/${product}`);
        if (fdir.data)
            return true;
        else {
            return false;
        }
    } catch (err) {
        return { error: "Some error had occured" }
    }
}