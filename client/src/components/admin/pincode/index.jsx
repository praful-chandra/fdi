import React, { useState, useEffect } from "react";
import styles from "../../../sass/modules/adminDashboard/pincode.module.scss";
import { Button, Table } from "antd";
import {
  AppstoreAddOutlined,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import PopupComponent from "../../showPopup.component";
import CreatePin from "./createPin";
import { listPincode } from "../../../functions/pincode.function";

function index() {
  const [popup, setpopup] = useState(false);
  const [pinList, setPinList] = useState([]);

  const listPincodes = () => {
    listPincode().then((res) => {
      if (res && !res.error) {
        setPinList(res);
      }
    });
  };

  useEffect(() => {
    listPincodes();
  }, [popup]);

  const editPin = pin =>{
    setpopup(pin);
  }

  const columns = [
    {
      title: "Zone",
      dataIndex: "groupName",
      key: "zones",
    },
    {
      title: "Pincodes",
      dataIndex: "pincodes",
      key: "pincodes",
      render: (text) => {
        return text.join(" ");
      },
    },
    {
      title: "estTime",
      dataIndex: "estTime",
      key: "estTime",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_,record) => {
        return <EditFilled onClick={()=>editPin(record)} style={{ cursor: "pointer", fontSize: "2rem" }} />;
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (_) => {
        return (
          <DeleteFilled
            style={{ cursor: "pointer", color: "red", fontSize: "2rem" }}
          />
        );
      },
    },
  ];

  return (
    <div className={styles.wrapper}>
      {popup && (
        <PopupComponent
          child={<CreatePin obj={popup} close={() => setpopup(false)} />}
          close={() => setpopup(false)}
        />
      )}

      <h3 className={styles.heading}>PINCODE</h3>
      <Button
        size="large"
        shape="circle"
        icon={<AppstoreAddOutlined />}
        className={styles.addBtn}  
        onClick={() => setpopup({new : true})}
      />

      <Table columns={columns} dataSource={pinList} />
    </div>
  );
}

export default index;
