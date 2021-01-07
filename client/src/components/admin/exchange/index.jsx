import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import styles from "../../../sass/modules/adminDashboard/pincode.module.scss";
import PopupComponent from "../../showPopup.component";
import {
  AppstoreAddOutlined,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import CreateExchange from "./newExchange";
import {
  listExchange,
  deleteExchange,
} from "../../../functions/exchange.function";

function index() {
  const [popup, setpopup] = useState(false);
  const [exchangeList, setExchangeList] = useState([]);

  const fetchAllExchange = () => {
    listExchange().then((data) => {
      if (data && !data.error) {
        setExchangeList(data);
      }
    });
  };

  useEffect(() => {
    fetchAllExchange();
  }, [popup]);

  const columns = [
    {
      title: "SubCategory Name",
      dataIndex: "subCategory.name",
      key: "name",
      render: (_, record) => record.subCategory.name,
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => (
        <Button
          type="link"
          icon={<EditFilled />}
          onClick={() => setpopup(record)}
        />
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <Popconfirm
        title="Are you sure you want to delete "
          onConfirm={() => {
            deleteExchange(record._id);
            fetchAllExchange();
          }}
        >
          <Button type="link" icon={<DeleteFilled />} danger />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      {popup && (
        <PopupComponent
          child={
            <CreateExchange
              existingExchange={exchangeList}
              close={() => setpopup(false)}
              exObj={popup}
            />
          }
          close={() => setpopup(false)}
        />
      )}
      <Button
        size="large"
        shape="circle"
        icon={<AppstoreAddOutlined />}
        className={styles.addBtn}
        onClick={() => setpopup({ new: true })}
      />
      <div className={styles.heading}>Exchanges</div>

      <Table columns={columns} dataSource={exchangeList} pagination={false} />
    </div>
  );
}

export default index;
