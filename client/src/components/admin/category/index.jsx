import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import CreateCategoryComponent from "./createCategory.component";

import {
  listAllCategories,
  deleteCategory,
} from "../../../redux/actions/categoryActions";

function Index({ listAllCategories, deleteCategory }) {
  const { addToast } = useToasts();
  const {
    category: { categories },
  } = useSelector((state) => state);

  useEffect(() => {
    listAllCategories();
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
      <CreateCategoryComponent />

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
                  <td className={`${styles.categoryAction}`}>
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
