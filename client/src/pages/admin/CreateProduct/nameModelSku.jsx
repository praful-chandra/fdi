import React from 'react';
import {Form , Input} from "antd";
import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function nameModelSku({newProduct , setNewProduct}) {
    const handleChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setNewProduct(oldProduct =>({
            ...oldProduct,
            [name] : value
        }))
    }
  
    return (
        <>
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
        </>
    )
}

export default nameModelSku
