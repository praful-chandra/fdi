import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";

import CreateTagComponent from "./createTagComponent";
import PopupComponent from "../../showPopup.component";

function index() {
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
  
    const { addToast } = useToasts();

    return (
        <div className={styles.wrapper}>
        <span>
          <Button
            type="default"
            className={styles.addBtn}
            shape="circle"
            size="large"
            icon={<AppstoreAddOutlined />}
            onClick={() => setCreate(true)}
          />
        </span>
  
      {create && (
          <PopupComponent
            child={<CreateTagComponent />}
            close={() => setCreate(false)}
          />
        )}
          {/* 
        {edit && (
          <PopupComponent
            child={<EditSubCategoryComponent subCategory={edit} />}
            close={() => setEdit(false)}
          />
        )}
   */}
        <h2>Tags</h2>
        <div className={styles.categoryList}>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* {subCategories.map((d, i) => {
                return (
                  <tr key={d._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{d.name}</td>
                    <td>{d.parent.name}</td>
                    <td
                      className={`${styles.categoryAction}`}
                      onClick={() => setEdit(d)}
                    >
                      <EditFilled />
                    </td>
                    <td
                      onClick={() => handleRemove(d)}
                      className={` text-danger , ${styles.categoryAction}`}
                    >
                      <DeleteFilled />
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default index
