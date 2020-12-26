import React from "react";
import styles from "../../sass/modules/userDashboard/userDash.module.scss";

function adminNavComponent({ user, selected, setSelected }) {
  const navItems = [
    "home",
    "Categories",
    "sub categories",
    "Tags",
    "Brands",
    "products",
    "Deal Of The Week",
    "Best sellers",
    "FDI Recommended",
    "coupons",
    "change password",
    "Exchange",
    "Manager"
  ];
  return (
    <div className={styles.navWrap}>
      <div className={styles.profileInfo}>
        <img src={user.picture} alt="name" />
        <h3>{user.name}</h3>
        <p>{user.role}</p>
      </div>

      <ul className={styles.nav}>
        {navItems.map((n, i) => (
          <li
            key={i}
            onClick={() => {
              setSelected(i);
            }}
            className={i === selected ? styles.navActive : ""}
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default adminNavComponent;
