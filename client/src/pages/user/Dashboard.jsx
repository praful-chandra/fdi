import React,{useState} from 'react';
import {useSelector} from "react-redux";
import UserNavComponent from "../../components/user/UserNav.component";
import ResetPasswordComponent from "../../components/user/passwordReset.component";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";

function Dashboard() {
  const [selected, setSelected] = useState(0);
    const {user} = useSelector(state =>state);

    const renderContent = () =>{
        switch(selected){
            case 3 : return  <ResetPasswordComponent />;
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
