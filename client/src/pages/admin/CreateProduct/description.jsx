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
            <ReactQuill theme="snow" value={newProduct.description} name="description" onChange={handleDescription} modules={{
                        toolbar: {
                            container: [
                                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'image', 'video'],
                                ['clean'],
                                ['code-block']
                            ]
                        }
                    }} />
          </Form.Item>
    )
}

export default description
