import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../../../sass/modules/adminDashboard/category.module.scss";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button, Select, Form } from "antd";
import { useToasts } from "react-toast-notifications";
const { Option } = Select;

import {addNewSubCategory} from "../../../redux/actions/subCategoryActions";

function CreateSubCategoryComponent({addNewSubCategory, category }) {
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");

  const { addToast } = useToasts();
  const allCategories = category.categories;
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
            <Select
              placeholder="Parent Category"
              style={{ width: "100%" }}
              onChange={(value) => setParent(value)}
              required
              allowClear

            >
             {
                 allCategories.map(ac=>{
                 return  <Option key={`category select ${ac._id}`} value={ac._id}>{ac.name}</Option>
                 })
             }
            </Select>
          </Form.Item>

          <br />
          <Button
            className={formStyles.formButton}
            // loading={category.categoryLoading}
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
});

export default connect(mapStateToProps,{addNewSubCategory})(CreateSubCategoryComponent);
