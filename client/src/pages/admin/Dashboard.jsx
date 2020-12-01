import React,{useState} from 'react';
import {useSelector} from "react-redux";
import ResetPasswordComponent from "../../components/user/passwordReset.component";
import AdminNavComponent from "../../components/admin/adminNav.component";
import HomeComponent from "../../components/admin/home.component";
import CategoryComponent from "../../components/admin/category";
import SubCategoryComponent from "../../components/admin/subCategory"
import TagComponent from "../../components/admin/tag";
import ProductComponent from "../../components/admin/product";
import BrandComponent from "../../components/admin/brand";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";


function Dashboard(props) {

    let page = props.location.search.split('=')[1];
    page = parseInt(page);

    const [selected, setSelected] = useState(page || 0);
    const {user} = useSelector(state =>state);
    
    const renderContent = () =>{
        switch(selected){
            case 0 : return  <HomeComponent />;
            case 1 : return  <CategoryComponent />;
            case 2 : return  <SubCategoryComponent />;
            case 3 : return  <TagComponent />;
            case 4 : return  <BrandComponent />;
            case 5 : return  <ProductComponent />;
            case 7 : return  <ResetPasswordComponent />;
            default : return <HomeComponent />;
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
