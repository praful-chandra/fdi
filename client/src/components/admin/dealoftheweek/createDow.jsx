import React, { useState, useEffect } from 'react';
import { Select, Form, AutoComplete, Checkbox } from "antd";
const { Option } = Select;
import styles from "../../../sass/modules/adminDashboard/deal.module.scss";
import PopupComponent from "../../showPopup.component";
import ColorListComponent from "./singleCol";

import { getAllCategory } from "../../../functions/category.funtion";
import { getSubCategoryByCategory } from "../../../functions/subCatefory.function";
import { listProduct, getProduct } from "../../../functions/product.function";

function CreateDow({ product, closeEdit }) {
    const handleChange = async val => {
        const prod = await getProduct(val, () => { });
        if (!prod.error) {
            setSelectedProduct(prod.success);
        }
    }

    if (product) {
        handleChange(product);
    }
    const [categories, setCategories] = useState({
        list: [],
        loading: false
    });
    const [subCategories, setsubCategories] = useState({
        list: [],
        loading: false
    });

    const [category, setCategory] = useState(false);
    const [subCategory, setSubCategory] = useState(false);
    const [search, setSearch] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(false);

    useEffect(async () => {
        setCategories(oc => ({ ...oc, loading: true }))
        setsubCategories(oc => ({ ...oc, loading: true }))
        try {
            const categoriesList = await getAllCategory();
            const subCategoryList = await getSubCategoryByCategory(category);
            if (categoriesList.error || subCategoryList.error)
                throw new Error();

            setCategories(oc => ({ ...oc, list: categoriesList }))
            setsubCategories(oc => ({ ...oc, list: subCategoryList }))

        } catch (err) { alert("error") }
        finally {
            setCategories(oc => ({ ...oc, loading: false }))
            setsubCategories(oc => ({ ...oc, loading: false }))

        }
    }, [category])

    const setSearchVal = item => {
        return {
            value: item.slug
        }
    }

    const handleSearch = async txt => {
        setSearchLoading(true);
        if (!txt) {
            setSearch([])
        } else {

            const getProducts = await listProduct(5, 0, { name: txt, category, subCategory });

            setSearch(s => {
                return getProducts.success.products.map(p => setSearchVal(p));
            })

        }
        setSearchLoading(false);


    }




    const selectColor = () => {

        return <div className={styles.selectColor}>
            <div className={styles.selectColorHead}>
                Washing machine
            </div>
            <div className={styles.selectColorBody}>
                <img src={`${process.env.REACT_APP_API_ROOT_URI}${selectedProduct.images[0].full}`} className={styles.selectColorImage} alt="" />
                <div className={styles.selectColorData}>
                    {
                        selectedProduct.options.map(optns => {
                            return <div key={`select col option ${optns._id}`} className={styles.selectColorOption}>
                                <p>{optns.title}</p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Current Price</th>
                                            <th scope="col">Deal Price</th>
                                            <th scope="col">Save</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            optns.color.map(col => (
                                                <ColorListComponent key={`select col col ${col._id}`} col={col} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        })
                    }
                </div>
            </div>


        </div>
    }
    const handleSubmit = () => {

    }
    return (
        <div className={styles.wrapper}>
            {
                selectedProduct && <PopupComponent
                    child={selectColor()}
                    close={() => {
                        closeEdit();
                        setSelectedProduct(false);
                    }}
                />
            }
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>

                    <div>
                        <Form.Item label="Category">
                            <Select
                                placeholder="Select Category"
                                style={{ width: 400 }}
                                value={category}
                                onChange={(val) => setCategory(val)}
                                loading={categories.loading}
                                allowClear={true}
                            >
                                {
                                    categories.list.map(cat => (
                                        <Option key={`dropcat ${cat._id}`} value={cat._id}> {cat.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item label="Sub Category">
                            <Select
                                placeholder="Select Sub Category"
                                style={{ width: 400 }}
                                loading={subCategories.loading}
                                value={subCategory}
                                onChange={(val) => setSubCategory(val)}
                                allowClear={true}

                            >
                                {
                                    subCategories.list.map(cat => (
                                        <Option key={`dropSubcat ${cat._id}`} value={cat._id}> {cat.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </div>



                </div>

                <div>
                    <Form.Item label="Product">
                        <AutoComplete
                            style={{ width: '100%' }}
                            allowClear={true}
                            options={search}
                            onSearch={handleSearch}
                            loading={searchLoading}
                            onSelect={handleChange}
                        />
                    </Form.Item>
                </div>

            </form>
        </div>
    )
}

export default CreateDow
