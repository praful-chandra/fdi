import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";

import { addNewTag } from "../../../redux/actions/tagActions"; 

function CreateTagComponent({ addNewTag, tag }) {
  const [name, setName] = useState("");
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTag(name)
      .then((result) => {
        if (result.error) {
          addToast(result.error, { appearance: "error", autoDismiss: true });
        } else {
          addToast(`${result.success} Tag Created`, {
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
          <h1>Create new Tag</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tag name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            className={formStyles.formButton}
            loading={tag.categoryLoading}
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
  tag : state.tag
});

export default connect(mapStateToProps, { addNewTag })(
  CreateTagComponent
);
