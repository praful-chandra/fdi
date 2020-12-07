import React from "react";
import { Form, Select } from "antd";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function CategorySubcategory({
  product,
  setProduct,
  categories,
  subCategories,
  brands,
}) {
  const handleCategoryChange = (id) => {
    setProduct((oldProduct) => ({
      ...oldProduct,
      category: id,
      subCategory: null,
    }));
  };
  const handleSubCategoryChange = (id) => {
    setProduct((oldProduct) => ({
      ...oldProduct,
      subCategory: id,
    }));
  };
  const handleBrandChange = (id) => {
    setProduct((oldProduct) => ({
      ...oldProduct,
      brand: id,
    }));
  };
  return (
    <div className={styles.flexHorizontal}>
      <Form.Item label="Brand" required>
        <Select
          onChange={handleBrandChange}
          value={product.brand}
        >
          {brands.map((brand) => (
            <Select.Option value={brand._id} key={brand._id}>
              {brand.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Category" required>
        <Select onChange={handleCategoryChange} value={product.category}>
          {categories.map((c) => (
            <Select.Option value={c._id} key={c._id}>
              {c.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Sub Category" required>
        <Select
          disabled={product.category === null}
          onChange={handleSubCategoryChange}
          value={product.subCategory}
        >
          {subCategories.map((sub) =>
            sub.parent._id === product.category ? (
              <Select.Option value={sub._id} key={sub._id}>
                {sub.name}
              </Select.Option>
            ) : null
          )}
        </Select>
      </Form.Item>
    </div>
  );
}

export default CategorySubcategory;
