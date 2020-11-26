import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { SketchPicker } from 'react-color';

import {
  HomeFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Form, Input, Select, Button, Tag } from "antd";
import { listAllCategories } from "../../redux/actions/categoryActions";
import { listAllSubCategories } from "../../redux/actions/subCategoryActions";
import { listAllTags } from "../../redux/actions/tagActions";

import styles from "../../sass/modules/adminDashboard/newProduct.module.scss";

import {addProduct} from "../../functions/product.function";

const { CheckableTag } = Tag;

const topBar = () => (
  <div className={styles.topBar}>
    <div>
      <HomeFilled />
    </div>
  </div>
);

const initialState = {
  name: "",
  model: "",
  sku: "",
  highlights: [],
  description: "",
  category: null,
  subCategory: null,
  tags: [],
  options: [],
};

function CreateProduct({
  listAllCategories,
  listAllSubCategories,
  listAllTags,
}) {
  const [newProduct, setNewProduct] = useState(initialState);

  const {
    category: { categories },
    subCategory: { subCategories },
    tag: { tags },
  } = useSelector((state) => state);

  const handleChange = (e)=>{
      const value = e.target.value;
      const name = e.target.name;
      setNewProduct(oldProduct =>({
          ...oldProduct,
          [name] : value
      }))
  }

  const handleDescription = value =>{
      setNewProduct(oldProduct =>({
          ...oldProduct,
          description : value
      }))
  }

  const addNewHighlight = () => {
    setNewProduct((oldState) => ({
      ...oldState,
      highlights: [...oldState.highlights, ""],
    }));
  };

  const handleHighlightChange = (e, index) => {
    setNewProduct((oldState) => {
      let newHighlight = oldState.highlights.map((h, i) =>
        i === index ? e.target.value : h
      );
      return {
        ...oldState,
        highlights: newHighlight,
      };
    });
  };

  const handleRemoveHighlight = (index) => {
    setNewProduct((oldState) => {
      let newHighlight = oldState.highlights.filter((h, i) => i !== index);
      return {
        ...oldState,
        highlights: newHighlight,
      };
    });
  };

  const handleCategoryChange = (id) => {
    setNewProduct((oldProduct) => ({
      ...oldProduct,
      category: id,
      subCategory: null,
    }));
  };
  const handleSubCategoryChange = (id) => {
    setNewProduct((oldProduct) => ({
      ...oldProduct,
      subCategory: id,
    }));
  };

  const handleTagToggle = (id) => {
    const includes = newProduct.tags.includes(id);
    if (!includes)
      setNewProduct((oldProduct) => ({
        ...oldProduct,
        tags: [...oldProduct.tags, id],
      }));
    else
      setNewProduct((oldProduct) => ({
        ...oldProduct,
        tags: oldProduct.tags.filter((t) => t !== id),
      }));
  };

  const handleAddOption = ()=>{
      setNewProduct(oldProduct=>({
          ...oldProduct,
          options : [...oldProduct.options , { title : '', color : { name : '', price : '' , hex : '' , quantity : ''}}]
      }))
  }

  const handelDeleteOption = (index) =>{
      setNewProduct(oldProduct =>({
          ...oldProduct,
          options : oldProduct.options.filter((o,i) => i !== index)
      }))
  }

  const handleOptionNameChange = (e,index) =>{
      setNewProduct(oldProduct =>{
          const newOptions = oldProduct.options.map( (o,i)=> {
              if(i === index){
                  o.title = e.target.value;
              }
              return o;
          } );
          return {
              ...oldProduct,
              options : newOptions
          }
      })
  }

  const handleOptionColorChange = (e, index )=>{
        setNewProduct(oldProduct =>{
            const newOptions = oldProduct.options.map((o,i)=>{
                if(i === index){
                    o.color[e.target.name] = e.target.value;
                }
                return o;
            });
            return {
                ...oldProduct,
                options : newOptions
            }
        })
  }

  const handleOptionColorHexChange = (hex , index) =>{
    setNewProduct(oldProduct =>{
        const newOptions = oldProduct.options.map((o,i)=>{
            if(i === index){
                o.color.hex = hex.hex;
            }
            return o;
        });
        return {
            ...oldProduct,
            options : newOptions
        }
    })
    
  }

  const handleSubmit = async () =>{
      try{
          const result = await addProduct(newProduct);
      }catch (err){
          
      }
  }

  useEffect(() => {
    if (categories.length === 0) {
      listAllCategories();
    }
    if (subCategories.length === 0) {
      listAllSubCategories();
    }
    if (tags.length === 0) {
      listAllTags();
    }
  }, []);


  return (
    <div className={`center , ${styles.wrapper}`}>
      {topBar()}
      <div className={styles.content}>
        <div className={styles.image}></div>

        <Form size="large">
          <Form.Item required label="Name">
            <Input value={newProduct.name} name="name" onChange={handleChange} />
          </Form.Item>

          <div className={styles.flexHorizontal}>
            <Form.Item required label="model">
              <Input value={newProduct.model} name="model" onChange={handleChange} />
            </Form.Item>
            <Form.Item required label="sku">
              <Input value={newProduct.sku} name="sku" onChange={handleChange} />
            </Form.Item>
          </div>

          <Form.Item label="Highlights">
            {newProduct.highlights.map((h, i) => (
              <div className={styles.listWithAction}>
                <Input
                  value={h}
                  onChange={(e) => handleHighlightChange(e, i)}
                />
                <div>
                  <MinusCircleOutlined
                    onClick={() => handleRemoveHighlight(i)}
                  />
                </div>
              </div>
            ))}
            <Button icon={<PlusOutlined />} block onClick={addNewHighlight}>
              add
            </Button>
          </Form.Item>

          <Form.Item label="Description" required>
            <ReactQuill theme="snow" value={newProduct.description} name="description" onChange={handleDescription} />
          </Form.Item>

          <div className={styles.flexHorizontal}>
            <Form.Item label="Category" required>
              <Select
                onChange={handleCategoryChange}
                value={newProduct.category}
              >
                {categories.map((c) => (
                  <Select.Option value={c._id} key={c._id}>
                    {c.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Sub Category" required>
              <Select
                disabled={newProduct.category === null}
                onChange={handleSubCategoryChange}
                value={newProduct.subCategory}
              >
                {subCategories.map((sub) =>
                  sub.parent._id === newProduct.category ? (
                    <Select.Option value={sub._id} key={sub._id}>
                      {sub.name}
                    </Select.Option>
                  ) : null
                )}
              </Select>
            </Form.Item>
          </div>

          <Form.Item label="Tags">
            <div className={styles.formTags}>
              {/* <div className={styles.formTagsInput}>
                <Input placeholder="Search Tag" allowClear />
              </div> */}
              {tags.map((t) => (
                <CheckableTag
                  onClick={() => handleTagToggle(t._id)}
                  key={t._id}
                  checked={newProduct.tags.includes(t._id)}
                >
                  {t.name}
                </CheckableTag>
              ))}
            </div>
          </Form.Item>

          <Form.Item label="Options">
            {
                newProduct.options.map((option,index)=>{
                    return <div className={styles.listWithAction}>              
                <div className={styles.option}>
                    <div className={styles.optionInput}>
                    <Input placeholder="option Name" value={option.title} onChange={ e => handleOptionNameChange(e, index)} />
                    </div>
                    {
                        option.title && <div className={styles.optionColor}>
                        <p>Color</p>
                        <Input placeholder="Color Name" value={option.color.name} name="name" onChange={ e => handleOptionColorChange(e,index) } />
                        <Input placeholder="Price" type='number' value={option.color.price} name="price" onChange={ e => handleOptionColorChange(e,index) } />
                        <Input placeholder="Quantity"  type='number' value={option.color.quantity} name="quantity" onChange={ e => handleOptionColorChange(e,index) } />
                        <Input placeholder="select Color" style={{backgroundColor : option.color.hex}} value={option.color.hex} name="hex" onChange={ e => handleOptionColorChange(e,index) } />
                        <SketchPicker  color={option.color.hex} onChange={ e => handleOptionColorHexChange(e,index)} />
                    </div>
                    }
                </div>

              <div>
                <MinusCircleOutlined onClick={() => {handelDeleteOption(index)}} />
              </div>
            </div>
                })
            }
            <Button icon={<PlusOutlined />} block onClick={handleAddOption}>
              add
            </Button>
          </Form.Item>

          <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Save
        </Button>
      </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default connect(null, {
  listAllCategories,
  listAllSubCategories,
  listAllTags,
})(CreateProduct);
