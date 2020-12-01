import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Button, Popconfirm } from "antd";
import {
  AppstoreAddOutlined,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import PopupComponent from "../../showPopup.component";

import styles from "../../../sass/modules/adminDashboard/category.module.scss";

import CreateBrandComponent from "./createBrand.component";
import EditBrandComponent from "./editBrand.component";
import { listBrands, removeBrand } from "../../../redux/actions/BrandActions";

function Index({ brand, listBrands, removeBrand }) {
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);

  const brands = brand.brands;
  const { addToast } = useToasts();

  useEffect(() => {
    if (brands.length === 0) listBrands();
  }, []);

  const handleRemove = (slug) => {
    if (slug)
      removeBrand(slug).then((res) => {
        if (res.success) {
          addToast(`${res.success} successfully deleted`, {
            appearance: "success",
            autoDismiss: true,
          });
        } else {
          addToast(`Deletion error`, {
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
          child={<CreateBrandComponent />}
          close={() => setCreate(false)}
        />
      )}

      {edit && (
        <PopupComponent
          child={<EditBrandComponent oldBrand={edit} />}
          close={() => setEdit(false)}
        />
      )}

      <h2>Brands</h2>
      <div className={styles.categoryList}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Logo</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((d, i) => {
              return (
                <tr key={d._id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_API_ROOT_URI}${d.logo}`}
                      className={styles.image}
                      alt=""
                      srcSet=""
                    />
                  </td>
                  <td>{d.name}</td>
                  <td
                    className={`${styles.categoryAction}`}
                    onClick={() => setEdit(d)}
                  >
                    <EditFilled />
                  </td>
                  <td className={` text-danger , ${styles.categoryAction}`}>
                    <Popconfirm
                      title="Are you sure to delete this ?"
                      onConfirm={() => handleRemove(d.slug)}
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
  );
}

const mapStateToProps = (state) => ({
  brand: state.brand,
});

export default connect(mapStateToProps, { listBrands, removeBrand })(Index);
