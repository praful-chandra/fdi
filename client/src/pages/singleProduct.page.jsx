import React, { useState, useEffect } from "react";
import styles from "../sass/modules/singleProduct/singleProduct.module.scss";
import Head from "../components/product/singleProductHead";
import Description from "../components/product/singleProductDescription";
import Recommended from "../components/recommended";
import Review from "../components/product/review";

import { getFromColor, getRelated } from "../functions/product.function";
import { getDeal } from "../functions/deal.functions";

function singleProductPage(props) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const colorSlug = props.match.params.slug;


  const fetchInitData = async () => {
    try {
      const color = await getFromColor(colorSlug);
      if (color && !color.error) {
        setProduct(color);
        document.title = `FairDeal International | ${color.product.name}`;
        const deal = await getDeal(color.selectedProduct._id);

        if (deal) {
          setProduct((op) => ({ ...op, deal: deal }));
        } else {
          setProduct((op) => ({ ...op, deal: false }));
        }

        const related = await getRelated(color.product.slug);

        if (related) {
          setRelatedProducts(related);
        }
      }
    } catch (err) {}
  };

  useEffect(() => {
    setLoading(true);
    fetchInitData()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        {" "}
        <h1>LOADING ....</h1>
      </div>
    );
  } else if (!product) return <h1>404</h1>;
  else {
    return (
      <div>
        <div className="center">
          <Head product={product} />
          <Description body={product.product.description} />
        </div>
        <div className={styles.related}>
          <Recommended invert={true} items={relatedProducts} title="Related items" />
        </div>
        <Review reviews={product.product.reviews} productId={product.product._id} />
      </div>
    );
  }
}

export default singleProductPage;
