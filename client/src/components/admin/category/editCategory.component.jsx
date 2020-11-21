import React,{useState} from "react";
import { useSelector,connect } from "react-redux";
import formStyles from "../../../sass/modules/auth/register.module.scss";
import { Button } from "antd";
import { useToasts } from "react-toast-notifications";
import { updateCateory } from "../../../redux/actions/categoryActions";


function editCategoryComponent({ category,updateCateory }) {

        const [name,setName] = useState(category.name);
        const { addToast } = useToasts();
        const {category : {categoryLoading}} = useSelector(state => state);

        const handleSubmit = e=>{
            e.preventDefault();
            updateCateory({slug : category.slug, name}).then((result) => {
                if (result.error) {
                  addToast(result.error, { appearance: "error", autoDismiss: true });
                } else {
                  addToast(`${result.success} Category Updated`, {
                    appearance: "success",
                    autoDismiss: true,
                  });
                }
              })
              .catch((err) => {});
        }

  return (  
    <div>
      <form onSubmit={handleSubmit} >
        <div className={formStyles.form}>
          <h1>Edit Category</h1>

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
            loading={categoryLoading}
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

export default connect(null,{updateCateory})(editCategoryComponent);
