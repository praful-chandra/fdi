import React, { useState, useEffect } from 'react';

import Head from "../components/product/singleProductHead";

import { getFromColor } from "../functions/product.function";
import {getDeal} from "../functions/deal.functions";

function singleProductPage(props) {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);

    const colorSlug = props.match.params.slug;

    const fetchInitData = async ()=>{
       try{
        const color = await getFromColor(colorSlug);
        if(color){
            setProduct(color);

            const deal = await getDeal(color.selectedProduct._id);

            if(deal){
                setProduct(op=>({...op ,deal : deal}));
            }else{
                setProduct(op=>({...op ,deal : false}));
            }
        }

       }catch(err){
           
       }
    }

    useEffect(() => {
        setLoading(true);
        fetchInitData().then(()=>{
            setLoading(false);
        }).catch(()=>{
            setLoading(false);

        })

    }, [])

    if (loading) {return (<div> <h1>LOADING ....</h1></div>)}
    else if(!product) return ( <h1>404</h1> )
    else {
        return (
            <div>
                <div className="center">
                <Head product={product} />   
                </div>

            </div>
        )
    }
}

export default singleProductPage;
