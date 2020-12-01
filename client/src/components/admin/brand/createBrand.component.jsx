import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";

import { addBrand } from "../../../redux/actions/BrandActions"; 

function CreateBrandComponent({ addBrand, brand }) {
  const [name, setName] = useState("");
  const [image,setImage] = useState({image : null , preview : null})
  const { addToast } = useToasts();

  const handleLogo = e =>{
      const image = e.target.files[0];

      if(image)
      setImage({
          image ,
          preview : URL.createObjectURL(image)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name',name);
    formData.append('logo', image.image);

    addBrand(formData)
      .then((result) => {
        if (result.error) {
          addToast(result.error, { appearance: "error", autoDismiss: true });
        } else {
          addToast(`${result.success} Brand Created`, {
            appearance: "success",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {});

      setName('');
      setImage({image : null, preview : null});
  };

  return (
    <div className={styles.createCategory}>
      <form onSubmit={handleSubmit}>
        <div className={formStyles.form}>
          <h1>Create new Brand</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Category name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="logo-in">
                
                <img src={image.preview} className={`${styles.image} ${styles.toUpload}`}/>
              <input type="file" name="logo" id="logo-in" hidden onChange={handleLogo}/>
          </label>

          <Button
            className={formStyles.formButton}
            loading={brand.brandLoading}
            onClick={handleSubmit}
            disabled={!name || !image.image}
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
  brand: state.brand,
});

export default connect(mapStateToProps, { addBrand })(
  CreateBrandComponent
);
