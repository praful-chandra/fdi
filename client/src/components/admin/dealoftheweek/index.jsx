import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";

import {listDeals} from "../../../functions/deal.functions";

function index() {

    const [deals,setDeals] = useState();

    const {
        category: { categories },
        subCategory: { subCategories },
        tag: { tags },
        brand : {brands}
      } = useSelector((state) => state);

      useEffect(()=>{
          listDeals().then(data=>{
              if(!data.error){
                  setDeals(data)
              }
          })
      },[])

      console.log(deals);
    return (
        <div>
            Index
        </div>
    )
}

export default index
