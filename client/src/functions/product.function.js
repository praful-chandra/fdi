import axios from 'axios'

export const addProduct = async (product) =>{

    //removing blank inputs
    product.highlights = product.highlights.filter(h => h !== "");
    product.options = product.options.filter(o => o.title !== "" );
    product.options = product.options.map(o =>{
        o.color = o.color.filter(c => c.name !== "" && c.hex !== '');

        return o;
    })


    return await axios.post('/product',product);

}