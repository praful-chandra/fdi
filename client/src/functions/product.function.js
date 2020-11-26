import axios from 'axios'

export const addProduct = async (product) =>{

    return await axios.post('/product',product);

}