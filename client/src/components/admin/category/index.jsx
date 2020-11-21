import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import CreateCategoryComponent from "./createCategory.component";
import EditCategoryComponent from "./editCategory.component";
import PopupComponent from "../../showPopup.component";

import {
  listAllCategories,
  deleteCategory,
} from "../../../redux/actions/categoryActions";

function Index({ listAllCategories, deleteCategory }) {
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);

  const { addToast } = useToasts();
  const {
    category: { categories },
  } = useSelector((state) => state);

  useEffect(() => {
    if (categories.length === 0) listAllCategories();
  }, []);

  const handleRemove = (cat) => {
    const flag = confirm(`Do you want to delete ${cat.name}`);
    if (flag) {
      deleteCategory(cat.slug)
        .then((res) => {
          if (res.success) {
            addToast(`${res.success.name} successfully deleted`, {
              appearance: "success",
              autoDismiss: true,
            });
          } else {
            addToast(`Deletion error`, {
              appearance: "error",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          addToast(`Deletion error`, {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
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
          child={<CreateCategoryComponent />}
          close={() => setCreate(false)}
        />
      )}

      {edit && (
        <PopupComponent
          child={<EditCategoryComponent category={edit} />}
          close={() => setEdit(false)}
        />
      )}

      <h2>Categories</h2>
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
            {categories.map((d, i) => {
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
                    onClick={() => handleRemove(d)}
                    className={` text-danger , ${styles.categoryAction}`}
                  >
                    <DeleteFilled />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default connect(null, { listAllCategories, deleteCategory })(Index);
