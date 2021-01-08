import React, { useState, useEffect } from "react";
import { Checkbox, Select, Radio, Input, Card } from "antd";
const { Option } = Select;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShoppingBag,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import priceFormatter from "../../functions/priceFormatter";
import { lookupPin } from "../../functions/pincode.function";
import styles from "../../sass/modules/singleProduct/singleProductHead.module.scss";
import PopUpComponent from "../showPopup.component";

function singleProductHeadRight({ product, addCart, exchange,buyNow }) {
  const [addOns, setAddOns] = useState([]);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState(1);
  const [exchangeProduct, setExchangeProduct] = useState(null);
  const [exchangeProductSub, setExchangeProductSub] = useState(false);
  const [popup, setPopup] = useState(false);
  const [pincode, setPincode] = useState({
    est: false,
    loading: false,
  });

  const handlePinCheck = (pin) => {
    if(pin){
      setPincode((op) => ({ ...op, loading: true }));
      lookupPin(pin).then((res) => {
        if (res && !res.error) {
          setPincode({ est: res, loading: false });
        } else {
          setPincode({ est: -1, loading: false });
        }
      });
    }
   
  };

  const handleAddOn = (e) => {
    const item = e.target.value;

    const existingAddOn = addOns.find((a) => a._id === item._id);

    if (existingAddOn) {
      setAddOns((oa) => oa.filter((oait) => oait._id !== item._id));
    } else {
      setAddOns((oa) => [...oa, item]);
    }
  };

  const handleCartAdd = () => {
    let exchangeObj = {};

    if (exchangeProduct && exchangeProductSub) {
      exchangeObj = {
        name: exchangeProduct.name,
        exchangeId: exchangeProduct._id,
        type: exchangeProduct.type,
        subTypeId: exchangeProductSub._id,
        subType: exchangeProductSub.name,
        exchangePrice: exchangeProductSub.exchangePrice,
      };
    }
    addCart(addOns, count, exchangeObj);
  };

  const handleBuyNow = ()=>{
    let exchangeObj = {};

    if (exchangeProduct && exchangeProductSub) {
      exchangeObj = {
        name: exchangeProduct.name,
        exchangeId: exchangeProduct._id,
        type: exchangeProduct.type,
        subTypeId: exchangeProductSub._id,
        subType: exchangeProductSub.name,
        exchangePrice: exchangeProductSub.exchangePrice,
      };
    }
    buyNow(addOns, count, exchangeObj);
  }

  const renderQtyItems = () => {
    let data = [];
    for (let i = 1; i <= product.selectedProduct.quantity && i <= 5; i++) {
      data.push(
        <Option key={`rightquantity prodyuct ${i}`} value={i}>
          {i}
        </Option>
      );
    }

    return data;
  };

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
                  <div>{add.title}</div>
                  <div>
                    {add.price > 0 && priceFormatter(add.price)}{" "}
                    {add.details && (
                      <span onClick={() => setPopup(add)}>Details</span>
                    )}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
     
      <div className={styles.buyProductPin}>
        <span>Delivery : </span>{" "}
        <Input.Search
          type="number"
          loading={pincode.loading}
          onSearch={handlePinCheck}
        />
        <br />
        <br />
        {pincode.est && pincode.est >= 0 && (
          <span style={{ color: "green" }}>
            Your item will be delivered in {pincode.est} Days
          </span>
        )}
        {pincode.est === -1 && (
          <span style={{ color: "red" }}>
            Sorry! we can't deliver your product at this destination
          </span>
        )}
      </div>
      <div className={styles.buyProductAction}>
        {product.selectedProduct.quantity > 0 ? (
          <div>
          <div className={styles.buyProductQuantity}>
        <span>Quantity : </span>{" "}
        <Select value={count} onChange={(val) => setCount(val)}>
          {renderQtyItems()}
        </Select>
      </div>
            <button
              onClick={handleCartAdd}
              className={`${styles.buyProductButton} ${styles.buyProductButtonCart}`}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Add to Cart</span>
            </button>
            <button
              className={`${styles.buyProductButton} ${styles.buyProductButtonBag}`}
              onClick={handleBuyNow}
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
            <span>{priceFormatter(product.deal.discountPrice)}</span>
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
            onChange={(val) =>
              setExchangeProduct(() => {
                return exchange.type.find((e) => e._id === val);
              })
            }
            style={{ width: "100%" }}
          >
            {exchange.type.map((t) => (
              <Option value={t._id} key={t._id}>
                {t.name}
              </Option>
            ))}
          </Select>
          <div style={{ height: "2rem" }}></div>
          {exchangeProduct && (
            <Select
              style={{ width: "100%" }}
              value={setExchangeProductSub && exchangeProductSub._id}
              onChange={(val) => {
                setExchangeProductSub(() => {
                  let type = exchange.type.find(
                    (e) => e._id === exchangeProduct._id
                  );
                  return type.subType.find((e) => e._id === val);
                });
              }}
            >
              {exchangeProduct.subType.map((st) => [
                <Option value={st._id} key={st._id}>
                  {st.name}
                </Option>,
              ])}
            </Select>
          )}

          <h3 style={{ marginTop: "1rem", color: "green" }}>
            {exchangeProduct && exchangeProductSub && (
              <span>
                {" "}
                Save upto {priceFormatter(exchangeProductSub.exchangePrice)}
              </span>
            )}
          </h3>
        </div>

        {buyProductBody()}
      </>
    );
  };

  return (
    <div className={styles.buyProduct}>
      {popup && (
        <PopUpComponent
          child={
            <div>
              <Card
                title={popup.title}
                style={{ width: "80vw", height: "80vh" }}
                extra={<span style={{cursor : "pointer" , fontSize : "3rem" , fontWeight : "800"}} onClick={() => setPopup(false)}>X</span>}
              >
                <p>{popup.details}</p>
              </Card>
            </div>
          }
          close={() => setPopup(false)}
        />
      )}
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
