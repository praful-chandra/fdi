import React from "react";
import {HomeFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";


import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function topBar() {
  return (
    <div className={styles.topBar}>
      <div>
       <Link to="/admin/dashboard?id=5" >
       <HomeFilled style={{color :'#fff'}} />  
       </Link>
      </div>
    </div>
  );
}

export default topBar;
