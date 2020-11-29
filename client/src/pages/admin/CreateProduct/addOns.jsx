import React from "react";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function AddOns({ newProduct, setNewProduct }) {
  const handleAdd = () => {
    const emptyAdon = {
      title: "",
      price: 0,
      details: "",
    };

    setNewProduct((oldProduct) => {
      return {
        ...oldProduct,
        addOns: [...oldProduct.addOns, emptyAdon],
      };
    });
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    const name = e.target.name;

    setNewProduct((oldProduct) => {
      let newAddons = oldProduct.addOns.map((oadd, i) => {
        if (i === index) {
          oadd = { ...oadd, [name]: value };
        }
        return oadd;
      });

      return {
        ...oldProduct,
        addOns: newAddons,
      };
    });
  };
  
  const handleDelete = (index) =>{
      setNewProduct(oldProduct=>{
          const newAddons = oldProduct.addOns.filter((a,i)=>i !== index);
          return {
              ...oldProduct,
              addOns : newAddons
          }
      })
  }

  return (
    <Form.Item label="Add Ons">
      {newProduct.addOns.map((add, index) => {
        return (
          <div key={`addOn ${index}`} className={styles.listWithAction}>
            <div>
            <div className={styles.flexHorizontal}>
              <Form.Item label="Title">
                <Input
                  type="text"
                  value={add.title}
                  name="title"
                  onChange={(e) => handleChange(e, index)}
                />
              </Form.Item>
              <Form.Item label="Price">
                <Input
                  type="number"
                  value={add.price}
                  name="price"
                  onChange={(e) => handleChange(e, index)}
                />
              </Form.Item>
            </div>
            <Form.Item label="Description">
              <TextArea
                value={add.details}
                name="details"
                onChange={(e) => handleChange(e, index)}
              />
            </Form.Item>

            </div>
            <div>
              <MinusCircleOutlined
                onClick={() => {
                    handleDelete(index);
                }}
              />
            </div>
          </div>
        );
      })}
       <Button icon={<PlusOutlined />} block onClick={handleAdd}>
        add AddOn
      </Button>
    </Form.Item>
  );
}

export default AddOns;
