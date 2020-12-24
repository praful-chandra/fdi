import React, { useState, useEffect } from 'react';
import { getCategory } from "../functions/category.funtion";
import { listProductwithVariance } from "../functions/product.function";
import styles from "../sass/modules/productPage/productpage.module.scss";
import ListProductCard from "../components/shop/listProductCard";
import { Pagination } from "antd";

function shopCategory({ match }) {
    let categorySlug = match.params.slug;

    const [loading, setLoading] = useState(true);
    const [category, SetCategory] = useState(undefined);
    const [products, setProducts] = useState({ allProducts: [], totalCount: 0 });
    const [skip, setSkip] = useState(0);

    const fetchCategory = async () => {
        setLoading(true);
        const res = await getCategory(categorySlug);
        if (res && !res.error) {
            SetCategory(res);

            const prods = await listProductwithVariance(5, skip, { category: [res._id] });

            if (prods.success) {
                setProducts(prods.success)
            }
        }
        setLoading(false);
    }


    useEffect(() => {
        fetchCategory();
    }, [skip])

    return (
        <div className={`center , ${styles.productPage}`} style={{minHeight : "100vh"}}>
            {
                 loading && <h1>LOADIING... </h1>
            }


           {
               category && (
                <div className={styles.products}>
                <div className={styles.head}>
                    <h5>{category.name} </h5>
                    <div></div>
                </div>
                {/* {FilterBar()} */}

                <div className={styles.productsWrapper}>
                    {products.allProducts.map((prod) => (
                        <ListProductCard key={prod._id} product={prod} />
                    ))}
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Pagination
                        pageSize={5}
                        onChange={(page) => {
                            setSkip(page - 1);
                        }}
                        current={skip + 1}
                        total={products.totalCount}
                    />
                </div>
            </div>
               )
           }


        </div>
    )
}

export default shopCategory
