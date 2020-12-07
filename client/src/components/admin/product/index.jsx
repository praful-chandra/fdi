import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Pagination } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {useToasts} from "react-toast-notifications";

import AdminSmallProductCardComponent from "../AdminSmallProductCard.component";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";

const { Search } = Input;

import {listProduct,deleteProduct} from "../../../functions/product.function";

function Index() {
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState('');
  const [products,setProducts] = useState([]);
  const [totalCount,setTotalCount] = useState(0);
  const history = useHistory();
  const {addToast} = useToasts();

  const onSearch = (s) => {
    setSearch(s);
    setSkip(0);
  };

  const fetchProducts = () =>{
    listProduct(limit, skip , search).then(data=>{
      if(data.success){
        setProducts(data.success.products);
        setTotalCount(data.success.totalCount);
      }
    });
  }

  useEffect(()=>{
    fetchProducts();
  } , [skip,search])

  const handleDelete = slug =>{

    deleteProduct(slug).then(res =>{
      if(res.success){
        addToast("Successfully deleted ",{appearance : 'success'});
        fetchProducts();
      }else{
        addToast("Delete failed",{appearance : 'error'});
      }
    })

  }

  return (
    <div className={styles.wrapper}>
      <span>
        <Button
          type="default"
          className={styles.addBtn}
          shape="circle"
          size="large"
          icon={<AppstoreAddOutlined />}
          onClick={() => history.push("/admin/newproduct")}
        />
      </span>
      <h2>Products</h2>

      <div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: "100%", margin: "2rem 0" }}
        />
      </div>

      <div className={styles.productsWrapper}>

        {
          products.map(p => (
            <AdminSmallProductCardComponent key={`admin pageproduct card ${p._id}`} product={p} remove={handleDelete} />
          ))
        }  


      </div>

      <div className={styles.pagination}>
        <Pagination
          current={skip + 1}
          onChange={(v) => setSkip(v - 1)}
          total={totalCount}
          showSizeChanger={false}
          pageSize={10}
        />
      </div>
    </div>
  );
}

export default Index;
