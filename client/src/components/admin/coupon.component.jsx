import React,{useState,useEffect} from 'react';
import {Table,Button,Form,Input} from "antd";
import {DeleteFilled} from "@ant-design/icons";
import styles from "../../sass/modules/coupon.module.scss";
import {useToasts} from "react-toast-notifications";
import {addCoupon,listCoupon,deleteCoupon} from "../../functions/coupon.function";

function Coupoon() {
    const [newCoupon,setNewCoupon] = useState({
        name : "",
        code :"",
        percentage: 0,
        upto : 0
    })
    const [couponList,setCouponList] = useState([]);

    const fetchCoupons = async()=>{
        const coupons = await listCoupon();
        if(!coupons.error){
            setCouponList(coupons);
        }
    }

    useEffect(() => {
        fetchCoupons();
    }, [])

    const {addToast} = useToasts();

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        if(name === "percentage" && value > 100){
            return;
        }

        setNewCoupon(oc => ({
            ...oc,
            [name] : value
        }))
    }

    const handleAddCoupon = (e)=>{
        e.preventDefault();
        addCoupon(newCoupon).then(data=>{
            if(!data.error){
                addToast("Success",{appearance : "success" , autoDismiss : true});
                setNewCoupon({
                    name : "",
                    code :"",
                    percentage: 0,
                    upto : 0
                });
                fetchCoupons();
            }else{
                addToast("An error occured" ,{autoDismiss : true, appearance : "error"})
            }
        })
    }

    const handleDeleteCoupon = async couponId =>{
        const res = await deleteCoupon(couponId);
        if(!res.error){
            addToast("Success",{appearance : "success", autoDismiss :true});
            fetchCoupons();
        }else{
            addToast("An error occured" ,{autoDismiss : true, appearance : "error"})
        }
    }



    const columns = [
        {
            title : "Name",
            dataIndex : "name",
            key : "name"
        },{
            title : "Code",
            dataIndex : "code",
            key : "code"
        },{
            title : "Discount Precentage",
            dataIndex : "percentage",
            key : "percentage"
        },{
            title : "Up To ",
            dataIndex : "upto",
            key : "upto"
        },{
            title : "Delete",
            key:"delete",
            render : (_,record)=>{
                    return <Button icon={<DeleteFilled />} shape="round" type="primary" danger onClick={()=>handleDeleteCoupon(record._id)} />
            }
        }
    ]

    return (
        <div className={styles.wrapper} >
      <h2>Coupons</h2>

      <div className={styles.form}>
            <Form onSubmit={handleAddCoupon}>
                <div className={styles.flexHorizontal}>
                <Form.Item label="Name">
                    <Input placeholder="name" name="name" value={newCoupon.name} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Code">
                    <Input placeholder="Code" name="code" value={newCoupon.code} onChange={handleChange} />
                </Form.Item>
                </div>
                <div className={styles.flexHorizontal}>
                <Form.Item label="discount Percentage" rules={[{max : 100}]}>
                    <Input placeholder="discount Percentage" type="number" name="percentage" value={newCoupon.percentage} onChange={handleChange} />
                </Form.Item>
                <Form.Item label="upto price">
                    <Input placeholder="upto price" type="number" name="upto" value={newCoupon.upto} onChange={handleChange} />
                </Form.Item>
                </div>
                <Button onClick={handleAddCoupon} type="primary" block >Add</Button>
            </Form>
      </div>

            <Table columns={columns} dataSource={couponList} pagination={false} />
        </div>
    )
}

export default Coupoon

