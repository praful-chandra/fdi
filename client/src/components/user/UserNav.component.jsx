import React from "react";

import styles from "../../sass/modules/userDashboard/userDash.module.scss";

function UserNavComponent({ user, selected, setSelected }) {
  const navItems = ["personal Info", "my orders", "address", "change password"];
  return (
    <div className={styles.navWrap}>
      <div className={styles.profileInfo}>
        <img src={user.picture} alt="name" />
        <h3>{user.name}</h3>
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

export default UserNavComponent;
