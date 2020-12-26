import React, { useState, useEffect } from "react";
import { Switch, Table } from "antd";
import styles from "../../../sass/modules/adminDashboard/deal.module.scss";
import {
  listManagerRoles,
  toggleManagerRole,
} from "../../../functions/manager.function";
import {useToasts} from "react-toast-notifications";

function index() {
  const [list, setList] = useState([]);
  const {addToast} = useToasts();
  const fetchAllRoles = async () => {
    const res = await listManagerRoles();
    setList(res);
  };
  useEffect(() => {
    fetchAllRoles();
  }, []);

  const handleToggleManager = async (role) => {
    let res = await toggleManagerRole(role);
    if (res.success) {
        addToast(`${role} Successfully Toggled`,{autoDismiss : true ,appearance:"success"})
      fetchAllRoles();
    }
  };

  const data = [
    {
      type: "Orders",
      status: list.find((l) => l.role === "Orders") ? true : false,
    },
    {
      type: "Category",
      status: false,
    },
    {
      type: "SubCategory",
      status: false,
    },
    {
      type: "Tags",
      status: false,
    },
    {
      type: "Brands",
      status: false,
    },
    {
      type: "Products",
      status: false,
    },
    {
      type: "Deal of the Week",
      status: false,
    },
    {
      type: "BestSellers",
      status: false,
    },
    {
      type: "FDI Recommended",
      status: false,
    },
    {
      type: "Coupons",
      status: false,
    },
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text, record) => {
        return <Switch 
        onChange={() => handleToggleManager(record.type)} 
        checked={list.find(l=> l.role === record.type) ? true : false}
        />;
      },
    },
  ];

  return (
    <div className="center">
      <h1 className={styles.heading}>MANAGER</h1>

      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
}

export default index;
