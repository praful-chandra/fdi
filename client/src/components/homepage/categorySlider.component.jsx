import React,{useEffect,useState} from 'react';
import Recommended from "../recommended";

import {listProduct} from "../../functions/product.function";

function categorySliderComponent({category , invert}) {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        listProduct(6,0,{category : category._id}).then(data=>{
           if(data.success){
            setProducts(data.success.products);
           }
        })
                
    }, [])

    return (
        
       <Recommended invert={invert} items={products} title={category.name} />
    )
}

export default categorySliderComponent
