import React,{useState} from 'react';
import {useSelector} from "react-redux";
import ResetPasswordComponent from "../../components/user/passwordReset.component";
import AdminNavComponent from "../../components/admin/adminNav.component";
import HomeComponent from "../../components/admin/home.component";
import CategoryComponent from "../../components/admin/category";
import SubCategoryComponent from "../../components/admin/subCategory";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";


function Dashboard() {
    const [selected, setSelected] = useState(2);
    const {user} = useSelector(state =>state);

    const renderContent = () =>{
        switch(selected){
            case 0 : return  <HomeComponent />;
            case 1 : return  <CategoryComponent />;
            case 2 : return  <SubCategoryComponent />;
            case 5 : return  <ResetPasswordComponent />;
            default : return <> </>
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