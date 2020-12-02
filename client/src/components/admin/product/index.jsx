import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { Button, Popconfirm } from "antd";
import { AppstoreAddOutlined, EditFilled, DeleteFilled ,EyeFilled} from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";


function Index() {

    const history = useHistory();

    return (
        <div className={styles.wrapper}>
          <span>
        <Button
          type="default"
          className={styles.addBtn}
          shape="circle"
          size="large"
          icon={<AppstoreAddOutlined />}
          onClick={() => history.push('/admin/newproduct')}
        />
      </span>
      <h2>Products</h2>

        <div className={styles.productsWrapper}>

            <div className={styles.productCard}>
                <img src="https://source.unsplash.com/random" alt=""/>

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
    )
}

export default Index
