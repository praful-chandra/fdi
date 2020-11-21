import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";

import { addNewCategory } from "../../../redux/actions/categoryActions";

function CreateCategoryComponent({ addNewCategory, category }) {
  const [name, setName] = useState("");
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCategory(name)
      .then((result) => {
        if (result.error) {
          addToast(result.error, { appearance: "error", autoDismiss: true });
        } else {
          addToast(`${result.success} Category Created`, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <div className={styles.createCategory}>
      <form onSubmit={handleSubmit}>
        <div className={formStyles.form}>
          <h1>Create new Category</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Category name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            className={formStyles.formButton}
            loading={category.categoryLoading}
            onClick={handleSubmit}
            disabled={!name}
          >
            Add
          </Button>
          <br />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { addNewCategory })(
  CreateCategoryComponent
);
