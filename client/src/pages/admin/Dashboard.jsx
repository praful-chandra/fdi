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
            case 2: return <CategoryComponent />;
            case 3: return <SubCategoryComponent />;
            case 4: return <TagComponent />;
            case 5: return <BrandComponent />;
            case 6: return <ProductComponent />;
            case 7: return <DealOfTheWeekComponent />;
            case 8: return <BestSellerComponent />;
            case 9: return <FDIRecommendedComponent />;
            case 10 : return <CouponComponent />;
            case 11: return <ResetPasswordComponent />;
            case 12: return <ExchangeComponent />;
            case 13: return <ManagerComponent />;

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
