import React from 'react';
import {Form} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function description({newProduct , setNewProduct}) {
    const handleDescription = value =>{
        setNewProduct(oldProduct =>({
            ...oldProduct,
            description : value
        }))
    }
    return (
        <Form.Item label="Description" required>
            <ReactQuill theme="snow" value={newProduct.description} name="description" onChange={handleDescription} />
          </Form.Item>
    )
}

export default description
