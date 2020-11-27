import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Form } from "antd";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";
import { listAllCategories } from "../../../redux/actions/categoryActions";
import { listAllSubCategories } from "../../../redux/actions/subCategoryActions";
import { listAllTags } from "../../../redux/actions/tagActions";

import TopBar from "./topBar";
import NameModelSku from "./nameModelSku";
import Highlights from "./highlights";
import Description from "./description";
import CategorySubcategory from "./category-subcategory";

const initialState = {
  name: "",
  model: "",
  sku: "",
  highlights: [],
  description: "",
  category: null,
  subCategory: null,
  tags: [],
  options: [],
};

function index({ listAllCategories, listAllSubCategories, listAllTags }) {
  const [newProduct, setNewProduct] = useState(initialState);
  const {
    category: { categories },
    subCategory: { subCategories },
    tag: { tags },
  } = useSelector((state) => state);

  useEffect(() => {
    if (categories.length === 0) {
      listAllCategories();
    }
    if (subCategories.length === 0) {
      listAllSubCategories();
    }
    if (tags.length === 0) {
      listAllTags();
    }
  }, []);

  return (
    <div className={`center , ${styles.wrapper}`}>
      <TopBar />
      <div className={styles.content}>
        <Form size="large">

                <NameModelSku newProduct={newProduct} setNewProduct={setNewProduct} />
                <Highlights newProduct={newProduct} setNewProduct={setNewProduct} />
                <Description newProduct={newProduct} setNewProduct={setNewProduct} />
                <CategorySubcategory newProduct={newProduct} setNewProduct={setNewProduct} categories={categories} subCategories={subCategories} />

        </Form>
      </div>
    </div>
  );
}

export default connect(null, {
  listAllCategories,
  listAllSubCategories,
  listAllTags,
})(index);
