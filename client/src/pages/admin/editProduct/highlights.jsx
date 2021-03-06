import React from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function highlights({ product, setProduct }) {
  const addNewHighlight = () => {
    setProduct((oldState) => ({
      ...oldState,
      highlights: [...oldState.highlights, ""],
    }));
  };

  const handleHighlightChange = (e, index) => {
    setProduct((oldState) => {
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
    setProduct((oldState) => {
      let newHighlight = oldState.highlights.filter((h, i) => i !== index);
      return {
        ...oldState,
        highlights: newHighlight,
      };
    });
  };

  return (
    <Form.Item label="Highlights">
      {product.highlights.map((h, i) => (
        <div className={styles.listWithAction} key={`highlights ${i}`}>
          <Input value={h} onChange={(e) => handleHighlightChange(e, i)} />
          <div>
            <MinusCircleOutlined onClick={() => handleRemoveHighlight(i)} />
          </div>
        </div>
      ))}
      <Button icon={<PlusOutlined />} block onClick={addNewHighlight}>
        add
      </Button>
    </Form.Item>
  );
}

export default highlights;
