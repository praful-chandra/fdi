import React, { useState, useEffect } from "react";
import styles from "../../../sass/modules/adminDashboard/returns.module.scss";
import orderStyles from "../../../sass/modules/userDashboard/orders.module.scss";
import { listReturn, changeStatus } from "../../../functions/return.function";
import priceFormatter from "../../../functions/priceFormatter";
import { Tag, Divider, Select } from "antd";
const { Option } = Select;

function index() {
  const [returns, setReturns] = useState([]);
  const [t, sett] = useState(false);
  useEffect(() => {
    listReturn().then((ret) => {
      console.log(ret);
      setReturns(ret);
    });
  }, [t]);

  const handleReturnChanged = (val, id) => {
    let flag = confirm(`Do you want to change status to => ${val}`);
    if (flag) {
      changeStatus(id, val).then((r) => {
        if (r && r.success) {
          alert("Status change Success !!");
          sett(!t);
        }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Returns</div>

      <ul className={orderStyles.orderList}>
        {returns.map((r) => {
          return (
            <>
              <li className={orderStyles.orderItem}>
                <div className={orderStyles.orderItemHead}>
                  <div>
                    <span>Order-Id </span>
                    <span>{r.orderId}</span>
                  </div>

                  <div>
                    <span>Customer Name</span>
                    <span>
                      {r.orderRef.address.firstName}{" "}
                      {r.orderRef.address.lastName}
                    </span>
                  </div>
                  <div>
                    <span>Customer Email</span>
                    <span>{r.orderRef.address.emailAddress}</span>
                  </div>
                  <div>
                    <span>Customer phone</span>
                    <span>{r.orderRef.address.phoneNumber}</span>
                  </div>

                  <div>
                    <span>Return Status </span>
                    <span>
                      <Tag color="#ffbf00">{r.status}</Tag>
                    </span>
                  </div>
                  <div>
                    <span>Action</span>
                    <Select
                      value={r.status}
                      onChange={(val) => handleReturnChanged(val, r._id)}
                    >
                      <Option value="Return Requested">Return Requested</Option>
                      <Option value="Returned"> Returned</Option>
                    </Select>
                  </div>
                </div>

                <div className={`${styles.returnProduct} row`}>
                  <div className="col-md-3">
                    <img
                      src={`${process.env.REACT_APP_API_ROOT_URI}${r.item.product.image}`}
                      alt=""
                      className={styles.returnImage}
                    />
                  </div>
                  <div className="col-md-5">
                    <span className={orderStyles.orderItemSingleName}>
                      {r.item.product.name}
                    </span>

                    {r.item.addOns.length > 0 && (
                      <div className={orderStyles.orderItemSingleAddons}>
                        <h4>AddOns</h4>
                        <ul>
                          {r.item.addOns.map((adon) => (
                            <li>
                              {" "}
                              {adon.title} :{" "}
                              <span>{priceFormatter(adon.price)}</span>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <h2>
                      <u>Address</u>
                    </h2>

                    <p>{r.orderRef.address.address}</p>
                    <p>
                      {r.orderRef.address.city}, {r.orderRef.address.state}
                    </p>
                    <p>{r.orderRef.address.pin}</p>
                  </div>
                </div>
              </li>
              <Divider />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default index;
