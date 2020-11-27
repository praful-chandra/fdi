import React from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import styles from "../../../sass/modules/adminDashboard/newProduct.module.scss";

function highlights({ newProduct, setNewProduct }) {
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

  return (
    <Form.Item label="Highlights">
      {newProduct.highlights.map((h, i) => (
        <div className={styles.listWithAction}>
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
