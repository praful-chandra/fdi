import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import styles from "../../sass/modules/checkout.module.scss";
import cartStyles from "../../sass/modules/cart.module.scss";
import priceFormatter from "../../functions/priceFormatter";

function reviewComponent() {
  const {
    cart
  } = useSelector((state) => state);
  const columns = [
    {
      title: "Image",
      key: "productImage",
      dataIndex: "productImage",
      render: (text) => (
        <img
          src={`${process.env.REACT_APP_API_ROOT_URI}${text}`}
          className={styles.img}
        />
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className={styles.cartProductName}>
          <span>{text}</span>
          <br />
          {record.addOns.length > 0 && (
            <p>
              <span>Addons : </span>
              <ul>
                {record.addOns.map((add) => (
                  <li key={add._id}>
                    {" "}
                    {add.title} : {priceFormatter(add.price)}{" "}
                  </li>
                ))}
              </ul>
            </p>
          )}

          {record.exchange && record.exchange.name && (
            <p>
              <span>Exchange :</span>
              <ul>
                <li>
                  {record.exchange.name} : -
                  {priceFormatter(record.exchange.exchangePrice)}
                </li>
              </ul>
            </p>
          )}
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        console.log(text);
        return <span>{priceFormatter(parseInt(text))}</span>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  return (
    <div className={styles.componentWrapper}>
      <div className="row">
        <div className="col-md-8">
          <Table dataSource={cart.items} columns={columns} pagination={false} />
        </div>
        <div className="col-md-4">
          <div className={cartStyles.head}>
            <h5>Cart Totals</h5>
          </div>

          <ul className={cartStyles.cartTotal}>
            <li>
              <span>SubTotal : </span>
              <span>
                {priceFormatter(500)}
              </span>
            </li>

            
          </ul>
          <p className={cartStyles.cartFinal} >
            <span>Total : </span>
            <span>{priceFormatter(cart.totalPrice)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default reviewComponent;
