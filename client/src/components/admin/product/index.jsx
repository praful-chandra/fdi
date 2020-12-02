import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Popconfirm, Input } from "antd";
import {
  AppstoreAddOutlined,
  EditFilled,
  DeleteFilled,
  EyeFilled,
} from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";

const { Search } = Input;

function Index() {
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const history = useHistory();

  const onSearch = (s) => {
    console.log(s);
  };

  return (
    <div className={styles.wrapper}>
      <span>
        <Button
          type="default"
          className={styles.addBtn}
          shape="circle"
          size="large"
          icon={<AppstoreAddOutlined />}
          onClick={() => history.push("/admin/newproduct")}
        />
      </span>
      <h2>Products</h2>

      <div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: "100%", margin: "2rem 0" }}
        />
      </div>

      <div className={styles.productsWrapper}>
        <div className={styles.productCard}>
          <img src="https://source.unsplash.com/random" alt="" />

          <p>The title </p>

          <div>
            <span>
              <EyeFilled />
            </span>
            <span>
              <EditFilled />
            </span>
            <span>
              <DeleteFilled />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
