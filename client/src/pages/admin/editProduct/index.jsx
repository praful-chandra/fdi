import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Input } from "antd";
import { useToasts } from "react-toast-notifications";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

import { getProduct, updateProduct } from "../../../functions/product.function";

import TopBar from "./topBar";
import Images from "./images";
import NameModelSku from "./nameModelSku";
import Highlights from "./highlights";
import Description from "./description";
import CategorySubcategoryBrand from "./category-subcategory-brand";
import Tags from "./tags";
import Options from "./options";
import Addons from "./addOns";

function Index(props) {
  const slug = props.match.params.slug;
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);

  const { addToast } = useToasts();

  const {
    category: { categories },
    subCategory: { subCategories },
    tag: { tags },
    brand: { brands },
  } = useSelector((state) => state);

  useEffect(async () => {
    const prod = (await getProduct(slug, setLoading)).success;
    setProduct({
      ...prod,
      imageDeleted: [],
      category: prod.category._id,
      subCategory: prod.subCategory._id,
      brand: prod.brand._id,
      tags: prod.tags.map((t) => t._id),
    });
  }, []);

  const handleSubmit = () => {
    // removing blank inputs
    setProduct((oldProd) => ({
      ...oldProd,
      images: oldProd.images.filter((i) => !i.thumb),
      highlights: oldProd.highlights.filter((h) => h !== ""),
      options: oldProd.options.filter((o) => o.title !== ""),
      options: oldProd.options.map((o) => {
        o.color = o.color.filter((c) => c.name !== "" && c.hex !== "");
        return o;
      }),
      addOns: oldProd.options.filter((add) => add.title !== ""),
    }));

    const formData = new FormData();

    for (const [key, value] of Object.entries(product)) {
      if (key !== "images") formData.append(key, JSON.stringify(value));
    }

    product.images.forEach((image) => {
      if (!image.thumb) {
        formData.append("images[]", image);
      }
    });

    //!DEBUG PURPOSE
    //   for(var pair of formData.entries()) {
    //     console.log(pair[0]+ ', '+ pair[1]);
    //  }
    updateProduct(product.slug, formData)
      .then((response) => {
        alert("successfully Updated");
        props.history.push(`/admin/dashboard?id=7`);
      })
      .catch((err) => {
        addToast("Some error occured !", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  if (loading) return <h1>Loading</h1>;
  else if (!product) return <h1>404</h1>;
  else
    return (
      <div className={`center , ${styles.wrapper}`}>
        <TopBar />
        <div className={styles.content}>
          <Form size="large">
            <Images products={product} setProduct={setProduct} />
            <NameModelSku product={product} setProduct={setProduct} />
            <Highlights product={product} setProduct={setProduct} />
            <Form.Item label="Meta description">
              <Input.TextArea
                name="metaDescription"
                value={product.metaDescription}
                onChange={(e) => {
                  let value = e.target.value;
                  setProduct((onp) => ({
                    ...onp,
                    metaDescription : value,
                  }));
                }}
              />
            </Form.Item>
            <Description product={product} setProduct={setProduct} />
            <CategorySubcategoryBrand
              brands={brands}
              categories={categories}
              subCategories={subCategories}
              product={product}
              setProduct={setProduct}
            />
            <Tags product={product} setProduct={setProduct} tags={tags} />
            <Options product={product} setProduct={setProduct} />
            <Addons product={product} setProduct={setProduct} />

            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
}

export default Index;
