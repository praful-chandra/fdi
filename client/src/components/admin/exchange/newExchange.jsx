import React, { useState, useEffect } from "react";
import styles from "../../../sass/modules/adminDashboard/pincode.module.scss";
import { Button, Input } from "antd";
import {  MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import {addExchange,updateExchange} from "../../../functions/exchange.function";


function newExchange({close,existingExchange,exObj}) {
  const [values, setValues] = useState({
    subCategory: "",
    type: [],
  });
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    if(!exObj.new){
      setValues(exObj);
    }
  }, [])
  const {
    subCategory: { subCategories },
  } = useSelector((state) => state);

  const addType = () => {
    setValues((ov) => ({
      ...ov,
      type: [
        ...ov.type,
        { name: "", subType: [{ name: "", exchangePrice: null }] },
      ],
    }));
  };

  const addSubType = (ti) =>{
    setValues((ov) => ({
        ...ov,
        type: ov.type.map((t,i)=>{
            if(i === ti){
                return {
                    ...t,
                    subType : [...t.subType ,{ name: "", exchangePrice: null } ]
                }
            }else {
                return t
            }
        }),
      }));
  }

  const handleTypeChange = (index,e)=>{
    setValues(ov=>{
        let newTypes = ov.type;
        newTypes[index].name = e.target.value;
        return {...ov,type: newTypes}
    })
  }

  const handleSubTypeChange = (key,typeIndex,subIndex,e)=>{
      let value = e.target.value;
      setValues(ov=>{
          let newTypes = ov.type;
          newTypes[typeIndex].subType[subIndex][key] = value;
          return {...ov,type: newTypes}
      })
  }

  const deleteType = typeIndex =>{
      setValues(ov=>{
          let newType = ov.type.filter((_,i)=>i !== typeIndex);
          return {...ov,type: newType}
      })
  }

  const deleteSubType = (typeIndex,subTypeIndex) =>{
      setValues(ov=>{
          let newType = ov.type;
          let subType = newType[typeIndex].subType.filter((_,i)=>i !== subTypeIndex);
          newType[typeIndex].subType = subType;
          return {...ov,type: newType}
      })
  }

  const handleSubmit =  () =>{
      setLoading(true);

      if(exObj.new){
        addExchange(values).then(data=>{
          if(!data.error){
              alert(`SUCCESS`);
              setValues({
                 subCategory: "",
                 type: [],
               })
               close();
          }else{
              alert("FAILED");
          }
        setLoading(false);
  
      })
      }else{
        updateExchange(values).then(data=>{
          if(!data.error){
              alert(`SUCCESS`);
              setValues({
                 subCategory: "",
                 type: [],
               })
               close();
          }else{
              alert("FAILED");
          }
        setLoading(false);
  
      })
      }
    
 }

  return (
    <div className={styles.popup}>
      <form>
        <div className={styles.formItem}>
          <span>Sub Category Name</span>
          <select
            placeholder="Select a Sub Category"
            allowClear
            className="custom-select mr-sm-2"
            value={values.subCategory}
            onChange={(e) => {
              setValues((oe) => ({ ...oe, subCategory: e.target.value }));
            }}
            disabled={!exObj.new}
          >
          <option value=""></option>
            {subCategories.map((sb) => {
                let flag = true;
                
                existingExchange.map(ex=>{
                    if(ex.subCategory._id == sb._id){
                        flag = false;
                    }
                })
            if(flag)   return (
                <option key={`subCatExchange ${sb._id}`} value={sb._id}>
                  {sb.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.formItem}>
          <span>Type</span>

          {values.type.map((t,ti) => (
            <div className={styles.formSubItem}>
              <span>Type Name </span> <Button icon={<MinusCircleOutlined />} type="link" onClick={()=>deleteType(ti)} danger/>
              <br/>
              <hr/>
              <Input value={t.name} onChange={(e)=>handleTypeChange(ti,e)} />

              {t.subType.map((st,si) => (
                <div className={styles.formSubSubType}>
                <Button icon={<MinusCircleOutlined />} type="link" onClick={()=>deleteSubType(ti,si)} danger/>
                  <div>
                    <span>Name </span> <Input value={st.name} onChange={e=>handleSubTypeChange("name",ti,si,e)} />
                  </div>
                  <div>
                    <span>ExchangePrice </span> <Input value={st.exchangePrice} onChange={e=>handleSubTypeChange("exchangePrice",ti,si,e)} />
                  </div>
                 
                </div>
              ))}

              <Button
                    type="dashed"
                    onClick={() => addSubType(ti)}
                    style={{ width: "50%" }}
                    icon={<PlusOutlined />}
                  >
                    Add SubType
                  </Button>
            </div>
          ))}
        </div>

        <div className={styles.formItem}>
          <Button
            type="dashed"
            onClick={() => addType()}
            style={{ width: "60%" }}
            icon={<PlusOutlined />}
          >
            Add Type
          </Button>
        </div>

        <div className={styles.formAction}>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            SAVE
          </Button>
          <Button type="primary" danger onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default newExchange;
