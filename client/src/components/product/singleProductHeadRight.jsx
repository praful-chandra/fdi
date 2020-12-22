import React, { useState, useEffect } from "react";
import { Checkbox, Select, Radio, Button } from "antd";
const { Option } = Select;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShoppingBag,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../../functions/priceFormatter";

import styles from "../../sass/modules/singleProduct/singleProductHead.module.scss";

function singleProductHeadRight({ product, addCart, exchange }) {
  const [addOns, setAddOns] = useState([]);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState(1);
  const [exchangeProduct, setExchangeProduct] = useState(null);
  const handleAddOn = (e) => {
    const item = e.target.value;

    const existingAddOn = addOns.find((a) => a._id === item._id);

    if (existingAddOn) {
      setAddOns((oa) => oa.filter((oait) => oait._id !== item._id));
    } else {
      setAddOns((oa) => [...oa, item]);
    }
  };

  const handleCartAdd = ()=>{
    addCart(addOns, count,exchangeProduct)
  }

  const renderQtyItems = () =>{
    let data = [];
    for(let i = 1; i <= product.selectedProduct.quantity && i<= 5 ; i++){
          
          data.push(<Option key={`rightquantity prodyuct ${i}`} value={i}>{i}</Option>)
    }

    return data;
  }

  const buyProductBody = () => (
    <>
      {product.product.addOns.length > 0 && (
        <div className={styles.buyProductAddOn}>
          <div className={styles.buyProductAddOnTitle}>Add On's</div>
          {product.product.addOns.map((add) => {
            return (
              <div key={add._id} className={styles.buyProductAddOnItem}>
                <Checkbox
                  onChange={handleAddOn}
                  value={add}
                  checked={addOns.find((ad) => ad._id === add._id)}
                />
                <div>
                  <div>
                    {add.title}
                    <span>Details</span>
                  </div>
                  <div> {priceFormatter(add.price)} </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.buyProductQuantity}>
        <span>Quantity : </span>{" "}
        <Select value={count} onChange={val => setCount(val)} >
         {
           renderQtyItems()
         }

        </Select>

      </div>
      <div className={styles.buyProductPin}>
        <span>Delivery : </span>{" "}
        <input type="number" onChange={() => {}} value={560036} />
      </div>
      <div className={styles.buyProductAction}>
        {product.selectedProduct.quantity > 0 ? (
          <div>
            <button
              onClick={handleCartAdd}
              className={`${styles.buyProductButton} ${styles.buyProductButtonCart}`}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Add to Cart</span>
            </button>
            <button
              className={`${styles.buyProductButton} ${styles.buyProductButtonBag}`}
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Buy Now</span>
            </button>
          </div>
        ) : (
          <button
            className={`${styles.buyProductButton} ${styles.buyProductButtonCart}`}
            disabled={true}
            style={{ color: "red" }}
          >
            <FontAwesomeIcon icon={faExclamation} />
            <span>Out OF Stock</span>
          </button>
        )}
      </div>
    </>
  );

  const buyProductHead = () => (
    <div
      className={`${selected === 0 && styles.buyProductInactiveBottom} , ${
        styles.buyProductHead
      }`}
    >
      <Radio
        value={1}
        onChange={() => {}}
        onClick={() => setExchangeProduct(null)}
      />
      <div>
        <span>Without Exchange</span>
        {product.deal ? (
          <div className={styles.buyProductHeadPrice}>
            <span>{priceFormatter(12900)}</span>
            <span>{priceFormatter(product.selectedProduct.price)}</span>
          </div>
        ) : (
          <div className={styles.buyProductHeadPrice}>
            <span>{priceFormatter(product.selectedProduct.price)}</span>
            <span>{}</span>
          </div>
        )}
      </div>
    </div>
  );

  const exchangeHead = () => {
    return (
      <div
        className={`${selected === 1 && styles.buyProductInactive} , ${
          styles.buyProductHead
        }`}
      >
        <Radio value={0} onChange={() => {}} />
        <div>
          <span>With Exchange</span>
          <span>Up to {priceFormatter(exchange.maxPrice)} off</span>
        </div>
      </div>
    );
  };

  const exchangeBody = () => {

    return (
      <>
        <div className={styles.buyProductAddOn}>
          <div className={styles.buyProductAddOnTitle}>Exchange</div>

          <Select
            value={exchangeProduct && exchangeProduct._id}
            onChange={(val) => setExchangeProduct(()=>{
              return exchange.type.find(e => e._id === val)
            })}
            style={{ width: "100%" }}
          >
            {exchange.type.map((t) => (
              <Option value={t._id} key={t._id}>
                {t.name}
              </Option>
            ))}
          </Select>
           
          <h3 style={{marginTop : "1rem" , color : "green"}} >
            {
              exchangeProduct && ( <span> Save upto { priceFormatter(exchangeProduct.exchangePrice)}</span> )
            }
          </h3>
        </div>

        {buyProductBody()}
      </>
    );
  };

  return (
    <div className={styles.buyProduct}>
      <Radio.Group
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <div className={styles.buyProductWrapper}>
          {exchange && exchangeHead()}
          {selected === 0 && exchangeBody()}
          {exchange && buyProductHead()}
          {selected === 1 && buyProductBody()}
        </div>
      </Radio.Group>
    </div>
  );
}

export default singleProductHeadRight;
