import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Form, Button } from "antd";
import { useToasts } from "react-toast-notifications";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";
import { listAllCategories } from "../../../redux/actions/categoryActions";
import { listAllSubCategories } from "../../../redux/actions/subCategoryActions";
import { listAllTags } from "../../../redux/actions/tagActions";
import { addProduct } from "../../../functions/product.function";

import TopBar from "./topBar";
import Images from "./images";
import NameModelSku from "./nameModelSku";
import Highlights from "./highlights";
import Description from "./description";
import CategorySubcategory from "./category-subcategory";
import Tags from "./tags";
import Options from "./options";
import Addons from "./addOns";

const initialState = {
  images: [],
  name: "",
  model: "",
  sku: "",
  highlights: [],
  description: "",
  category: null,
  subCategory: null,
  tags: [],
  options: [],
  addOns: [],
};

import Resizer from "react-image-file-resizer";

function index({ listAllCategories, listAllSubCategories, listAllTags }) {
  const [newProduct, setNewProduct] = useState(initialState);
  const { addToast } = useToasts();

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

  const resizeImage = (image, size) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        image,
        size,
        size,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleSubmit = async () => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(newProduct)) {
      formData.append(key, JSON.stringify(value));
    }

    newProduct.images.forEach((image) => {
      formData.append("images[]", image);
    });

    //!DEBUG PURPOSE
    //   for(var pair of formData.entries()) {
    //     console.log(pair[0]+ ', '+ pair[1]);
    //  }

    try {
      const result = await addProduct(formData);
      addToast(`${result.data.name} Created`, {
        appearance: "success",
        autoDismiss: true,
      });
      setNewProduct(initialState);
    } catch (err) {
      console.log(err);
      addToast(err.response ? err.response.data.error : "failed to create", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className={`center , ${styles.wrapper}`}>
      <TopBar />
      <div className={styles.content}>
        <Form size="large">
          <Images newProduct={newProduct} setNewProduct={setNewProduct} />
          <NameModelSku newProduct={newProduct} setNewProduct={setNewProduct} />
          <Highlights newProduct={newProduct} setNewProduct={setNewProduct} />
          <Description newProduct={newProduct} setNewProduct={setNewProduct} />
          <CategorySubcategory
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            categories={categories}
            subCategories={subCategories}
          />
          <Tags
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            tags={tags}
          />
          <Options newProduct={newProduct} setNewProduct={setNewProduct} />
          <Addons newProduct={newProduct} setNewProduct={setNewProduct} />
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Save
            </Button>
          </Form.Item>
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
