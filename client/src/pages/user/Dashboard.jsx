import React,{useState} from 'react';
import {useSelector} from "react-redux";
import UserNavComponent from "../../components/user/UserNav.component";
import ResetPasswordComponent from "../../components/user/passwordReset.component";
import AddressComponent from "../../components/user/address.component";
import OrdersComponent from "../../components/user/orders.component";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";

function Dashboard() {
  const [selected, setSelected] = useState(0);
    const {user} = useSelector(state =>state);

    const renderContent = () =>{
        switch(selected){
            case 0 : return <OrdersComponent />;
            case 1 : return <AddressComponent />;
            case 2 : return  <ResetPasswordComponent />;
            default : return <> </>
        }
    }

    return (
        <div className={` ${styles.dashWrap}`} >
           <UserNavComponent user={user.user} selected={selected} setSelected={setSelected} />
           <div className={styles.content}>
              {renderContent()}
           </div>
        </div>
    )
}

export default Dashboard
