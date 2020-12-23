import React from "react";
import {connect} from "react-redux";
import {auth} from "../../firebase";
import {useHistory} from "react-router-dom";
import styles from "../../sass/modules/userDashboard/userDash.module.scss";
import { createOrUpdateUser ,roleBasedRedirect} from "../../functions/auth.function";
import {EditFilled} from "@ant-design/icons";
import {signInUser} from "../../redux/actions/userActions";


function UserNavComponent({ user, selected, setSelected ,signInUser}) {
  const navItems = [ "my orders", "address", "change password"];
  const history = useHistory();
  
  const handleAddName = async() =>{
    let name = prompt("Enter name");

    let user = auth.currentUser;
    await auth.currentUser.updateProfile({displayName : name});

    const token = await user.getIdTokenResult();
    
    const mongoResult = await createOrUpdateUser(token.token);
    const userObj = {
      token: token.token,
      user: mongoResult.data,
    };

    signInUser(userObj);
    roleBasedRedirect(mongoResult.data,history);
  }

  return (
    <div className={styles.navWrap}>
      <div className={styles.profileInfo}>
        {
          user.picturen && <img src={user.picture} alt="name" />
        }
        {
          user.name ? <h3>{user.name} <EditFilled onClick={handleAddName} />  </h3> : <a onClick={handleAddName} >Add name</a>
        }
        <p>{user.email}</p>
        <p>{user.phoneNumber}</p>
      </div>

      <ul className={styles.nav}>
        {navItems.map((n, i) => (
          <li
            key={i}
            onClick={() => {
              setSelected(i);
            }}
            className={i === selected ? styles.navActive : ''}
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(null,{signInUser})(UserNavComponent);
