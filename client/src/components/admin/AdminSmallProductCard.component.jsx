import React from "react";
import {Link} from "react-router-dom";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import priceFormatter from "../../functions/priceFormatter";
import ProductCardCarousel from "./productCardCarousel.component";
import styles from "../../sass/modules/smallProductCard.module.scss";

function AdminSmallProductCard({ product, remove}) {
  return (
    <>
      <div
        className={styles.card}
        title={product.name}
      >
        <div className={styles.cardContents}>
          <h3>{product.name}</h3>
          <div className={styles.cardContentsImages}>
            <ProductCardCarousel images={product.images} />
          </div>
          <div className={styles.cardContentsBottom}>
            <div>
              <span>{priceFormatter(Math.round(Math.random() * 155014))}</span>
            </div>
            <div>
              <div className={styles.addCart} style={{ color: "grey" }}>
               <Link to={`/admin/editProduct/${product.slug}`}>
               <EditFilled />
               </Link>
              </div>
              <div className={styles.addCart} style={{ color: "red" }}>
                <DeleteFilled onClick={()=>remove(product.slug)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSmallProductCard;
