import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";
import { updateSubCateory } from "../../../redux/actions/subCategoryActions";

function editSubCategoryComponent({ subCategory, updateSubCateory }) {
  const [name, setName] = useState(subCategory.name);
  const { addToast } = useToasts();
  const {
    subCategory: { subCategoryLoading },
  } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubCateory({ slug: subCategory.slug, name })
      .then((result) => {
        if (result.error) {
          addToast(result.error, { appearance: "error", autoDismiss: true });
        } else {
          addToast(`${result.success}subCategory Updated`, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={formStyles.form}>
          <h1>EditsubCategory</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="subCategory name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            className={formStyles.formButton}
            loading={subCategoryLoading}
            onClick={handleSubmit}
            disabled={!name}
          >
            Change
          </Button>
          <br />
        </div>
      </form>
    </div>
  );
}

export default connect(null, { updateSubCateory })(editSubCategoryComponent);
