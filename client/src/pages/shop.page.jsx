import React,{useState,useEffect} from 'react';
import { Select,Pagination } from 'antd';
const { Option } = Select;
import FilterPanel from "../components/shop/filterPanel";
import ListProductCard from "../components/shop/listProductCard";
import styles from "../sass/modules/productPage/productpage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faThList,
} from "@fortawesome/free-solid-svg-icons";

import {listProductwithVariance} from "../functions/product.function";



  
  
  function ShopPage() {

    const [products ,setProducts] = useState({
        allProducts : [],
        totalCount : 0
    });
    const [filters,setFilters] = useState ({
        category : [],
        brand :[]
    });


    const [skip,setSkip] = useState(0);

    useEffect(() => {
        let searchQuery = {}
        if(filters.category.length > 0){
            searchQuery.category = filters.category;
        }else{
            searchQuery.category = undefined;
        }

        if(filters.brand.length > 0){
            searchQuery.brand = filters.brand;
        }else{
            searchQuery.brand = undefined;
        }

        console.log(JSON.stringify(searchQuery));
        
        listProductwithVariance(5,skip,JSON.stringify(searchQuery)).then(res=>{
            if(res.success){
                setProducts(res.success);
            }
        })
    }, [skip,filters])


    const FilterBar = () => (
        <div className={styles.filterBar}>
          <div className={styles.filterBarIcons}>
            <FontAwesomeIcon icon={faTh} />
            <FontAwesomeIcon icon={faThList} />
          </div>
          <div className={styles.filterBarDropDown}>
            <Select name="sorting" style={{ width: 220 }} defaultValue="default">
              <Option value="default">Default Sorting</Option>
              <Option value="Popular">Popular</Option>
              <Option value="Price [low - high]">Price [low - high]</Option>
              <Option value="Price [high - low]">Price [high - low]</Option>
            </Select>
          </div>
    
          <div className={styles.filterBarPageSelector}>

          </div>
        </div>
      );
    
    
    return (
        <div>
        <div className={`center , ${styles.productPage}`}>

            <FilterPanel filters={filters} setFilters={setFilters} />

        <div className={styles.products}>
          <div className={styles.head}>
            <h5>Fridge </h5>
            <div></div>
          </div>
          {FilterBar()}
          
          <div className={styles.productsWrapper}>
            {
                products.allProducts.map(prod=><ListProductCard product={prod}/>)
            }
          </div>
          
          <div style={{display : "flex" , justifyContent : "center"}}>
          <Pagination defaultCurrent={1} pageSize={5} onChange={(page)=>{setSkip(page - 1)}} current={skip + 1} total={products.totalCount} />
          </div>
        </div>
      </div>   
   </div>
    )
}

export default ShopPage
