import React from "react";
import { Link } from "react-router-dom";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import priceFormatter from "../../functions/priceFormatter";
import ProductCardCarousel from "./productCardCarousel.component";
import styles from "../../sass/modules/smallProductCard.module.scss";

function AdminSmallProductCard({ product, remove }) {
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
            </div>
            <div>
              <div className={styles.addCart} style={{ color: "grey" }}>
                <Link to={`/admin/editProduct/${product.slug}`}>
                  <EditFilled />
                </Link>
              </div>
              <div className={styles.addCart} style={{ color: "red" }}>
                <Popconfirm
                  title="Are you sure to delete this ?"
                  onConfirm={() => remove(product.slug)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteFilled />
                </Popconfirm>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSmallProductCard;
