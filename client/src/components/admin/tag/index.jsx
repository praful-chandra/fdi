import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button,Popconfirm } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";

import CreateTagComponent from "./createTagComponent";
import EditTagComponent from "./editTagComponent";
import PopupComponent from "../../showPopup.component";

import {listAllTags , deleteTag} from "../../../redux/actions/tagActions";

function index( {listAllTags , deleteTag}) {
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    const { addToast } = useToasts();

    const {tag : {tags}} = useSelector(state => state);

    const handleRemove = (cat) => {
      console.log(cat);
      deleteTag(cat.slug).then((response) => {
        if (response.success) {
          addToast(`${response.success} Successfully deleted`, {
            appearance: "success",
            autoDismiss: true,
          });
        } else {
          addToast(`${response.error}`, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      });
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
            onClick={() => setCreate(true)}
          />
        </span>
  
      {create && (
          <PopupComponent
            child={<CreateTagComponent />}
            close={() => setCreate(false)}
          />
        )}
          
        {edit && (
          <PopupComponent
            child={<EditTagComponent tag={edit} />}
            close={() => setEdit(false)}
          />
        )} 
  
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
              {tags.map((d, i) => {
                return (
                  <tr key={d._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{d.name}</td>
                    <td
                      className={`${styles.categoryAction}`}
                      onClick={() => setEdit(d)}
                    >
                      <EditFilled />
                    </td>
                    <td
                      className={` text-danger , ${styles.categoryAction}`}
                    >
                       <Popconfirm
                      title="Are you sure to delete this ?"
                      onConfirm={()=>handleRemove(d)}
                      okText="Yes"
                      cancelText="No"
                    >
                    <DeleteFilled />
                    </Popconfirm>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default connect(null, {listAllTags,deleteTag})(index);
