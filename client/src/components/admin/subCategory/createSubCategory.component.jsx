import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button, Form } from "antd";
import { useToasts } from "react-toast-notifications";

import {addNewSubCategory} from "../../../redux/actions/subCategoryActions";

function CreateSubCategoryComponent({addNewSubCategory, category ,subCategory }) {
  const [name, setName] = useState("");
  const allCategories = category.categories;
  const [parent, setParent] = useState(allCategories[0]._id);

  const { addToast } = useToasts();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && parent){
        addNewSubCategory({name,parent}).then(result=>{
            if(result.success){
                addToast(`${result.success} subcategory is created`,{appearance : 'success', autoDismiss : true})
            }else{
                addToast(`${result.error}`,{appearance : 'error', autoDismiss : true})
            }
        }).catch(err=>{})
    }
  };

  return (
    <div className={styles.createCategory}>
      <form onSubmit={handleSubmit}>
        <div className={formStyles.form}>
          <h1>Create new Sub Category</h1>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Sub Category name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Form.Item label="Parent" style={{ width: "100%" }}>
          <select
              placeholder="Parent Category"
              style={{ width: "100%" }}
              onChange={(e) => setParent(e.target.value)}
              required
            >
             {
                 allCategories.map(ac=>{
                 return  <option key={`category select ${ac._id}`} value={ac._id}>{ac.name}</option>
                 })
             }  
            </select>
          </Form.Item>

          <br />
          <Button
            className={formStyles.formButton}
            loading={subCategory.subCategoryLoading}
            onClick={handleSubmit}
            disabled={!name || !parent}
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
  subCategory : state.subCategory
});

export default connect(mapStateToProps,{addNewSubCategory})(CreateSubCategoryComponent);
