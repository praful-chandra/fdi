import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import CreateSubCategoryComponent from "./createSubCategory.component";
import EditSubCategoryComponent from "./editSubCategory.component";
import PopupComponent from "../../showPopup.component";

import { deleteSubCategory , listAllSubCategories} from "../../../redux/actions/subCategoryActions";

function Index({ deleteSubCategory ,listAllSubCategories  }) {
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);

  const { addToast } = useToasts();

  const {
    subCategory: { subCategories },
  } = useSelector((state) => state);

  useEffect(() => {
    if(subCategories.length === 0){
      listAllSubCategories();
    }
  }, []);

  const handleRemove = (cat) => {
    const flag = confirm(`Do you want to delete ${cat.name}`);
    if (flag) {
      deleteSubCategory(cat.slug).then((response) => {
        if (response.success) {
          addToast(`${response.success} Successfully deleted`, {
            appearance: "success",
            autoDismiss: true,
          });
        } else {
          addToast(`${result.error}`, {
            appearance: "error",
            autoDismiss: true,
          });
        }
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
          child={<CreateSubCategoryComponent />}
          close={() => setCreate(false)}
        />
      )}
      
      {edit && (
        <PopupComponent
          child={<EditSubCategoryComponent subCategory={edit} />}
          close={() => setEdit(false)}
        />
      )}

      <h2>Sub Categories</h2>
      <div className={styles.categoryList}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Parent</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((d, i) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default connect(null, { deleteSubCategory,listAllSubCategories })(Index);
