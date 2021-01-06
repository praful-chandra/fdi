import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ResetPasswordComponent from "../../components/user/passwordReset.component";
import AdminNavComponent from "../../components/admin/adminNav.component";
import HomeComponent from "../../components/admin/homepage";
import CategoryComponent from "../../components/admin/category";
import SubCategoryComponent from "../../components/admin/subCategory"
import TagComponent from "../../components/admin/tag";
import ProductComponent from "../../components/admin/product";
import BrandComponent from "../../components/admin/brand";
import DealOfTheWeekComponent from "../../components/admin/dealoftheweek";
import BestSellerComponent from "../../components/admin/bestSellers";
import FDIRecommendedComponent from "../../components/admin/fdiRecommended";
import CouponComponent from "../../components/admin/coupon.component";
import ManagerComponent from "../../components/admin/manager";
import OrdersComponent from "../../components/admin/orders";
import ExchangeComponent from "../../components/admin/exchange";
import ReturnsComponent from "../../components/admin/returns";
import PinCodeComponent from "../../components/admin/pincode";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";


function Dashboard(props) {

    let page = props.location.search.split('=')[1];
    page = parseInt(page);

    const [selected, setSelected] = useState(page || 0);
    const { user } = useSelector(state => state);

    const renderContent = () => {
        switch (selected) {
            case 0: return <HomeComponent />;
            case 1: return <OrdersComponent />;
            case 2 : return <ReturnsComponent />;
            case 3: return <CategoryComponent />;
            case 4: return <SubCategoryComponent />;
            case 5: return <TagComponent />;
            case 6: return <BrandComponent />;
            case 7: return <ProductComponent />;
            case 8: return <DealOfTheWeekComponent />;
            case 9: return <BestSellerComponent />;
            case 10: return <FDIRecommendedComponent />;
            case 11 : return <CouponComponent />;
            case 12: return <ResetPasswordComponent />;
            case 13: return <ExchangeComponent />;
            case 14 : return <PinCodeComponent />;
            case 15: return <ManagerComponent />;
            

            default: return <HomeComponent />;
        }
    }

    return (
        <div className={` ${styles.dashWrap}`} >
            <AdminNavComponent user={user.user} selected={selected} setSelected={setSelected} />
            <div className={styles.content}>
                {renderContent()}
            </div>
        </div>
    )
}

export default Dashboard
