import React from "react";
import {HomeFilled} from "@ant-design/icons";


import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function topBar() {
  return (
    <div className={styles.topBar}>
      <div>
        <HomeFilled />  
      </div>
    </div>
  );
}

export default topBar;
