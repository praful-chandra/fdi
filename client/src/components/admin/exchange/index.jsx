import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Select, Form, Input ,Button} from "antd";

const { Option } = Select;

import {addExchange} from "../../../functions/exchange.function";

function index() {
  const [exchange, setExchange] = useState({
    categoryName: "",
    subCategory: null,
    type: [],
  });
  const {
    subCategory: { subCategories },
  } = useSelector((state) => state);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setExchange((oe) => ({ ...oe, [name]: value }));
  };

  const handleTypeChange = (e,index) =>{
      let type = exchange.type;
      type[index][e.target.name] = e.target.value;
      setExchange(oe=>({...oe , type}))
  }

  const addType = () =>{
      setExchange(oe => ({...oe , type : [...oe.type , {name : '', exchangePrice : 0}]}))
  }

  const handleExchangeSubmit = async() =>{
     addExchange(exchange).then(data=>{
         if(!data.error){
             alert(`${data.categoryName} -- SUCCESS`);
             setExchange({
                categoryName: "",
                subCategory: null,
                type: [],
              })
         }else{
             alert("FAILED");
         }
     })
  }

  return (
    <div>
      <h1>Exchange</h1>
      <Form>
        <Form.Item
          label="categoryName"
          name="categoryName"
          rules={[{ required: true, message: "Please input CategoryName!" }]}
        >
          <Input
            name="categoryName"
            value={exchange.categoryName}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="subCategory"
          label="Parent"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select a Sub Category"
            allowClear
            value={exchange.subCategory}
            onChange={(val) => {
              setExchange((oe) => ({ ...oe, subCategory: val }));
            }}
          >
            {subCategories.map((sb) => {
              return (
                <Option key={`subCatExchange ${sb._id}`} value={sb._id}>
                  {sb.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        {
            exchange.type.map((t,i)=>{
                return <div key={`Type exchange index ${i}`}>
                    <Form.Item label="Type Name">
                        <Input name="name" onChange={(e)=>{handleTypeChange(e,i)}} />
                    </Form.Item>
                    <Form.Item label="Type Exchange Price">
                        <Input type="number" name="exchangePrice" onChange={(e)=>{handleTypeChange(e,i)}}/>
                    </Form.Item>
                </div>
            })
        }

        <Button onClick={addType}>Add Type +</Button>  

        <Button block type="primary" onClick={handleExchangeSubmit} >Add</Button>
      </Form>
    </div>
  );
}

export default index;
