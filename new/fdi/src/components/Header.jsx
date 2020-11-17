import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMapMarkerAlt,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/modules/navbar.module.scss";

import Logo from "../logo.svg";

function Header() {
  const categoryList = [
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
    {
      name: "categoryHead",
      sub: [
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
        "SubCategory",
      ],
    },
  ];
  return (
    <>
      <nav className={styles.desktop}>
        <div className={styles.topBar}>
          <ul className="center">
            <li>We Make Buying Easy For You</li>
            <li>
              <ul className={styles.topBarLinks}>
                <li>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Store Locator</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faTruck} />
                    <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <UserOutlined />
                    <span>account</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.middleBar}>
          <div className="center">
            <img
              className={styles.middleBarLogo}
              src={Logo}
              alt="fairdeal International"
            />
            <div className={styles.search}>
              <form action="#">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search products"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>

            <div className={styles.middleBarLinks}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Rs. 33500.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.categoryBar}>
          <div className="center"></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
