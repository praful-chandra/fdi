import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import styles from "../../sass/modules/userDashboard/userDash.module.scss";
import {listManagerRoles} from "../../functions/manager.function";
import ManagerNav from "./managerNav";

import ResetPasswordComponent from "../../components/user/passwordReset.component";
import CategoryComponent from "../../components/admin/category";
import SubCategoryComponent from "../../components/admin/subCategory"
import TagComponent from "../../components/admin/tag";
import ProductComponent from "../../components/admin/product";
import BrandComponent from "../../components/admin/brand";
import DealOfTheWeekComponent from "../../components/admin/dealoftheweek";
import BestSellerComponent from "../../components/admin/bestSellers";
import FDIRecommendedComponent from "../../components/admin/fdiRecommended";
import CouponComponent from "../../components/admin/coupon.component";


function index() {
    const [roles,setRoles] = useState([]);
  const [selected, setSelected] = useState("");

    const {user} = useSelector(state =>state);
    useEffect(()=>{
        listManagerRoles().then(data=>{
            setRoles(data.map(d=>d.role));
        })
    },[])

    const renderContent = () =>{
        switch(selected){
            case "change password" : return  <ResetPasswordComponent />;
            case "SubCategory" : return <SubCategoryComponent />;
            case "Tags" : return <TagComponent />;
            case "Brands" : return <BrandComponent />;
            case "BestSellers" : return <BestSellerComponent />;
            case "Coupons" : return <CouponComponent />;
            case "Category" : return <CategoryComponent />;
            case "Products" : return <ProductComponent />;
            case "FDI Recommended" : return <FDIRecommendedComponent />;
            case "Deal of the Week" : return <DealOfTheWeekComponent />;

            default : return <> Manager Dashboard </>
        }
    }

    return (
        <div className={` ${styles.dashWrap}`} >
            <ManagerNav items={roles} selected={selected} setSelected={setSelected} user={user.user} />
            <div className={styles.content}>
              {renderContent()}
           </div>
        </div>
    )
}

export default index
