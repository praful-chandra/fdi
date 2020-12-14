import React from 'react';
import {Form , Input} from "antd";
import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function nameModelSku({product , setProduct}) {
    const handleChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setProduct(oldProduct =>({
            ...oldProduct,
            [name] : value
        }))
    }


  
    return (
        <>
            <Form.Item required label="Name">
            <Input value={product.name} name="name" onChange={handleChange} />
          </Form.Item>

            <Form.Item required label="model">
              <Input value={product.model} name="model" onChange={handleChange} />
            </Form.Item>
            
     
        </>
    )
}

export default nameModelSku
