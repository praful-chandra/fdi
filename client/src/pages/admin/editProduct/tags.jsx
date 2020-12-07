import React from 'react';
import {Form , Tag} from "antd";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";


const {CheckableTag} = Tag;

function tags({product,setProduct,tags}) {
    const handleTagToggle = (id) => {
        const includes = product.tags.includes(id);
        if (!includes)
          setProduct((oldProduct) => ({
            ...oldProduct,
            tags: [...oldProduct.tags, id],
          }));
        else
          setProduct((oldProduct) => ({
            ...oldProduct,
            tags: oldProduct.tags.filter((t) => t !== id),
          }));
      };
    return (
        <Form.Item label="Tags">
            <div className={styles.formTags}>
              {/* <div className={styles.formTagsInput}>
                <Input placeholder="Search Tag" allowClear />
              </div> */}
              {tags.map((t) => (
                <CheckableTag
                  onClick={() => handleTagToggle(t._id)}
                  key={t._id}
                  checked={product.tags.includes(t._id)}
                >
                  {t.name}
                </CheckableTag>
              ))}
            </div>
          </Form.Item>
    )
}

export default tags
