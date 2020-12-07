import React from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { SketchPicker } from "react-color";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";
function options({ product, setProduct }) {
  const handleAddOption = () => {
    setProduct((oldProduct) => ({
      ...oldProduct,
      options: [
        ...oldProduct.options,
        { title: "", color: [{ name: "", price: "", hex: "", quantity: "" }] },
      ],
    }));
  };

  const handelDeleteOption = (index) => {
    setProduct((oldProduct) => ({ 
      ...oldProduct,
      options: oldProduct.options.filter((o, i) => i !== index),
    }));
  };

  const handleOptionNameChange = (e, index) => {
    setProduct((oldProduct) => {
      const newOptions = oldProduct.options.map((o, i) => {
        if (i === index) {
          o.title = e.target.value;
        }
        return o;
      });
      return {
        ...oldProduct,
        options: newOptions,
      };
    });
  };

  const handleOptionColorChange = (e, index ,ind) => {
    setProduct((oldProduct) => {
      const newOptions = oldProduct.options.map((o, i) => {
        if (i === index) {
          o.color.map((c,cid)=>{
              if(cid === ind){
                  c[e.target.name] = e.target.value;
              }
              return c
          })
        }
        return o;
      });
      return {
        ...oldProduct,
        options: newOptions,
      };
    });
  };

  const handleAddColor = (index) =>{
    setProduct((oldProduct) => {
        const newOptions = oldProduct.options.map((o, i) => {
          if (i === index) {
            o.color.push({ name: "", price: "", hex: "", quantity: "" });
          }
          return o;
        });
        return {
          ...oldProduct,
          options: newOptions,
        };
      });
  }

  const handleOptionColorHexChange = (hex, index,ind) => {
    setProduct((oldProduct) => {
      const newOptions = oldProduct.options.map((o, i) => {
        if (i === index) {
            o.color.map((c,cid)=>{
                if(cid === ind){
                    c.hex = hex.hex;
                }
                return c
            })
          }
          return o;
      });
      return {
        ...oldProduct,
        options: newOptions,
      };
    });
  };
  return (
    <Form.Item label="Options">
      {product.options.map((option, index) => {
        return (
          <div className={styles.listWithAction} key={`ooptioins ${index}`}>
            <div className={styles.option}>
              <div className={styles.optionInput}>
                <Input
                  placeholder="option Name"
                  value={option.title}
                  onChange={(e) => handleOptionNameChange(e, index)}
                />
              </div>
              {option.title && (
                <div className={styles.optionColor}>
                  <p>Color</p>
                  {option.color.map((col, ind) => (
                    <div className={styles.optionColorBlock} key={`Option color ${ind}`} >
                      <Input
                        placeholder="Color Name"
                        value={col.name}
                        name="name"
                        onChange={(e) => handleOptionColorChange(e, index,ind)}
                      />
                      <div className={styles.flexHorizontal}>
                        <Input
                          placeholder="Price"
                          type="number"
                          value={col.price}
                          name="price"
                          onChange={(e) => handleOptionColorChange(e, index,ind)}
                        />
                        <Input
                          placeholder="Quantity"
                          type="number"
                          value={col.quantity}
                          name="quantity"
                          onChange={(e) => handleOptionColorChange(e, index,ind)}
                        />
                      </div>
                      <Input
                        placeholder="select Color"
                        style={{ backgroundColor: col.hex }}
                        value={col.hex}
                        name="hex"
                        onChange={(e) => handleOptionColorChange(e, index,ind)}
                      />
                  <SketchPicker  color={col.hex} onChange={ e => handleOptionColorHexChange(e,index,ind)} />

                    </div>
                  ))}
                  <Button type="primary" onClick={()=>handleAddColor(index)}>Add color</Button>
                </div>
              )}
            </div>

            <div>
              <MinusCircleOutlined
                onClick={() => {
                  handelDeleteOption(index);
                }}
              />
            </div>
          </div>
        );
      })}
      <Button icon={<PlusOutlined />} block onClick={handleAddOption}>
        add Option
      </Button>
    </Form.Item>
  );
}

export default options;
