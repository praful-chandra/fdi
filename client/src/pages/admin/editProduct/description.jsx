import React from 'react';
import {Form} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function description({product , setProduct}) {
    const handleDescription = value =>{
        setProduct(oldProduct =>({
            ...oldProduct,
            description : value
        }))
    }
    return (
        <Form.Item label="Description" required>
            <ReactQuill theme="snow" value={product.description} name="description" onChange={handleDescription} />
          </Form.Item>
    )
}

export default description
