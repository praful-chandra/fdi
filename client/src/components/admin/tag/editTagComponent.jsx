import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";
import { updateTag } from "../../../redux/actions/tagActions";

function editTagComponent({ tag, updateTag }) {
  const [name, setName] = useState(tag.name);
  const { addToast } = useToasts();
  const {
    tag: { tagLoading },
  } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTag({ slug: tag.slug, name })
      .then((result) => {
        if (result.error) {
          addToast(result.error, { appearance: "error", autoDismiss: true });
        } else {
          addToast(`${result.success}tag Updated`, {
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
          <h1>Edit Tag</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="tag name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            className={formStyles.formButton}
            loading={tagLoading}
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

export default connect(null, { updateTag })(editTagComponent);
