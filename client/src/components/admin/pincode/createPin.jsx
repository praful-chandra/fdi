import React, { useState,useEffect } from "react";
import styles from "../../../sass/modules/adminDashboard/pincode.module.scss";
import { Button, Input } from "antd";
import { addPincode,updatePincode } from "../../../functions/pincode.function";
import { useToasts } from "react-toast-notifications";

function createPin({close,obj}) {
  const { addToast } = useToasts();
  const [values, setValues] = useState({
    groupName: "",
    pincodes: "",
    estTime: null,
  });

  useEffect(()=>{
    if(!obj.new){
      setValues({
        groupName : obj.groupName,
        pincodes : obj.pincodes.join(" "),
        estTime : obj.estTime
      })
    }
  },[]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((ov) => ({
      ...ov,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let result = false;
       
      if(obj.new){
        result = await addPincode(values);
      }else{
        result = await updatePincode(values);
      }
      

      if (result && result.success) {
        addToast("Successfully added !", {
          appearance: "success",
          autoDismiss: true,
        });
        setValues({
          groupName: "",
          pincodes: "",
          estTime: null,
        });
        close();
      }
    } catch (err) {
        addToast("Error occured please refresh and retry !", {
          appearance: "error",
          autoDismiss: true,
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.popup}>
      <form>
        <div className={styles.formItem}>
          <span>Group Name</span>
          <Input
            name="groupName"
            value={values.groupName}
            onChange={handleChange}
            disabled={!obj.new}
          />
        </div>

        <div className={styles.formItem}>
          <span>Pincodes</span>
          <Input.TextArea
            rows="10"
            name="pincodes"
            value={values.pincodes}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formItem}>
          <span>Estimated Days</span>
          <Input
            type="number"
            name="estTime"
            value={values.estTime}
            onChange={handleChange}
          />
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

export default createPin;
