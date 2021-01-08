import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../sass/modules/cart.module.scss";
import { Table, Space, Button, Spin, Input, Radio } from "antd";
import PriceFormatter from "../functions/priceFormatter";
import { deleteCart } from "../redux/actions/cartActions";
import priceFormatter from "../functions/priceFormatter";
import { DeleteFilled, LoadingOutlined } from "@ant-design/icons";
import { getDeal } from "../functions/deal.functions";
import { getCoupon } from "../functions/coupon.function";
import { useToasts } from "react-toast-notifications";
import { isMobile } from "react-device-detect";

const { Search } = Input;
function cartPage({ deleteCart, review, next ,buyNow }) {
  const [cart,setCart] = useState({items : [ ] , totalAmount : 0})
  let { cart : storageCart, user } = useSelector((state) => state);
  const [deals, setDeals] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [paymentMode, setPaymentMode] = useState(null);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const { addToast } = useToasts();

  useEffect(() => {
    if(buyNow){
      setCart(buyNow);
    }else{
      setCart(storageCart);
    }
  }, [buyNow,storageCart])


  useEffect(() => {
    calculateDiscount().then((val) => setDeals(val));
  }, [cart]);

  const calculateSubTotal = () => {
    let sum = 0;

    cart.items.map((itm) => {
      sum += itm.quantity * itm.price;
    });

    return sum;
  };

  const calculateAddons = () => {
    let sum = 0;
    cart.items.map((itm) => {
      itm.addOns.map((add) => {
        sum += add.price * itm.quantity;
      });
    });
    return sum;
  };

  const calculateExchanges = () => {
    let sum = 0;
    cart.items.map((itm, i) => {
      if (itm.exchange !== undefined) {
        // console.log("INDEX =>> ",i);
        sum += itm.exchange.exchangePrice;
      }
    });
    return sum;
  };

  const calculateDiscount = async () => {
    let sum = 0;

    for (let i = 0; i < cart.items.length; i++) {
      let deal = await getDeal(cart.items[i].product);
      {
        if (deal) {
          sum +=
            (cart.items[i].price - deal.discountPrice) * cart.items[i].quantity;
        }
      }
    }

    return sum;
  };

  const calculateCoupon = () => {
    let sum = 0;
    if (coupon) {
      let cartTotal = cart.totalPrice - deals;
      let finalSum = (coupon.percentage / 100) * cartTotal;

      if (finalSum <= coupon.upto) sum = finalSum;
      else sum = coupon.upto;
    }
    return sum;
  };

  const handleDelete = (record) => {
    deleteCart(record.product, user);
  };

  const checkCoupon = async (text) => {
    const coupon = await getCoupon(text);
    if (coupon && !coupon.error) {
      setCoupon(coupon);
      addToast(`${text.toUpperCase()} Added`, {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast("COUPON NOT FOUND !", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const handleReviewNext = () => {
    const finalCart = {
      items: cart.items,
      coupon,
      totalAmount: cart.totalPrice - deals - calculateCoupon(),
      paymentStatus : paymentMode
    };
    next(finalCart);
  };

  const columns = [
    {
      title: "Image",
      key: "productImage",
      dataIndex: "productImage",
      render: (text) => (
        <img src={`${process.env.REACT_APP_API_ROOT_URI}${text}`} />
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className={styles.cartProductName}>
          <Link to={`/product/${record.slug}`}>{text}</Link>
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

          {record.exchange && Object.keys(record.exchange).length > 0 && (
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
      render: (text) => <span>{PriceFormatter(text)}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  if (!review) {
    columns.push({
      title: "Delete",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            danger
            type="primary"
            onClick={() => handleDelete(record)}
            icon={<DeleteFilled />}
            shape="round"
            size="large"
          ></Button>
        </Space>
      ),
    });
  }
  return (
    <div className={`center ${styles.wrapper}`}>
      {!review && (
        <div className={styles.head}>
          <h5>Your Cart</h5>
          <div></div>
        </div>
      )}

      <div className={styles.cartBody}>
        <div className={styles.cartLeft}>
          {!isMobile ? (
            <Table
              dataSource={cart.items}
              columns={columns}
              pagination={false}
            />
          ) : (
            <div className={styles.mobileItems}>
              {cart.items.map((itm) => {

               return (
                <div className={styles.mobileItemsItem}>
                  <div>
                    <img
                      src={`${process.env.REACT_APP_API_ROOT_URI}${itm.productImage}`}
                      alt=""
                    />
                    <div>
                      <p>
                        <Link to={`/product/${itm.slug}`}>
                        {itm.name}
                        </Link>
                        {itm.addOns.length > 0 && (
                          <p>
                            <span>Addons : </span>
                            <ul>
                              {itm.addOns.map((add) => (
                                <li key={add._id}>
                                  {" "}
                                  {add.title} : {priceFormatter(add.price)}{" "}
                                </li>
                              ))}
                            </ul>
                          </p>
                        )}

                        {itm.exchange && Object.keys(itm.exchange).length > 0  && (
                          <p>
                            <span>Exchange :</span>
                            <ul>
                              <li>
                                {itm.exchange.name} ({itm.exchange.subType}) : 
                                <span>{priceFormatter(itm.exchange.exchangePrice)}</span>
                              </li>
                            </ul>
                          </p>
                        )}
                      </p>
                      <span className={styles.mobilePrice}>
                        {priceFormatter(itm.price)}
                      </span>
                    </div>
                  </div>
                  {!review && (
                    <Button danger block type="ghost" onClick={() => handleDelete(itm)} icon={<DeleteFilled />} />
                      
                  )}
                </div>
              )
              })}
            </div>
          )}
        </div>
        <div className={styles.cartRight}>
          <div className={styles.head}>
            <h5>Cart Totals</h5>
          </div>
          <ul className={styles.cartTotal}>
            <li>
              <span>SubTotal : </span>
              <span>{priceFormatter(calculateSubTotal())}</span>
            </li>

            {calculateAddons() > 0 && (
              <li>
                <span>Add Ons : </span>
                <span>{priceFormatter(calculateAddons())}</span>
              </li>
            )}

            {(deals === false || deals > 0) && (
              <li>
                <span>Deal of the Week Offer : </span>
                <span>
                  {" "}
                  -{" "}
                  {deals === false ? (
                    <Spin indicator={antIcon} />
                  ) : (
                    priceFormatter(deals)
                  )}
                </span>
              </li>
            )}

            {calculateExchanges() > 0 && (
              <li>
                <span>Exchanges : </span>
                <span>- {priceFormatter(calculateExchanges())}</span>
              </li>
            )}

            {coupon && (
              <li>
                <span>
                  Coupon :{" "}
                  <p style={{ fontWeight: 300 }}>
                    {coupon.code}{" "}
                    <Button
                      onClick={() => setCoupon(false)}
                      danger
                      icon={<DeleteFilled />}
                      type="ghost"
                    />{" "}
                  </p>{" "}
                </span>

                <span>- {priceFormatter(calculateCoupon())}</span>
              </li>
            )}
          </ul>

          <p className={styles.cartFinal}>
            <span>Total : </span>
            <span>
              {priceFormatter(cart.totalPrice - deals - calculateCoupon())}
            </span>
          </p>
          {review ? (
            <>
              <Search
                placeholder="input search text"
                shape="round"
                style={{ width: "100%" }}
                onSearch={checkCoupon}
                enterButton="Apply Coupon"
              />

              <br />
              <br />

              <Radio.Group onChange={(e) => {setPaymentMode(e.target.value)}} value={paymentMode}>
                <Radio value={"COD"}>Pay on Delivery</Radio>
                <Radio value={"Online"}>Online Payment</Radio>
              </Radio.Group>

              <br />
              <br />

              <Button
                disabled={!paymentMode}
                className={styles.checkout}
                onClick={handleReviewNext}
              >
                Place your Order
              </Button>
            </>
          ) : (
            <>
              <Link
                to={
                  user.user && user.token
                    ? "/checkout"
                    : { pathname: "/login", state: { from: "/cart" } }
                }
              >
                <Button className={styles.checkout} disabled={cart.items.length <= 0} >Checkout</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deleteCart })(cartPage);
