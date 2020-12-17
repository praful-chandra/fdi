/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMapMarkerAlt,
  faSearch,
  faHeart,
  faShoppingCart,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown } from "antd";
import { DownOutlined, LogoutOutlined, HomeFilled } from "@ant-design/icons";

import styles from "../../sass/modules/navbar.module.scss";
import Logo from "../../logo.svg";

import { signoutUser } from "../../redux/actions/userActions";
import { roleBasedRedirect } from "../../functions/auth.function";

function Header({ user, signoutUser, category, subCategories }) {
  let history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item
        icon={<HomeFilled />}
        onClick={() => roleBasedRedirect(user.user, history)}
      >
        <a href="#">Dashboard</a>
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} onClick={signoutUser}>
        <a href="#">Log out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <nav className={styles.desktop}>
        <div className={styles.topBar}>
          <ul className="center">
            <li>We Make Buying Easy For You</li>
            <li>
              <ul className={styles.topBarLinks}>
              <li>
                <Link to="/shop">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span>Shop</span>
                </Link>
              </li>
                <li>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Store Locator</span>
                  </Link>
                </li>

                {!user.user && (
                  <li>
                    <Link to="/login">
                      <UserOutlined />
                      <span>login</span>
                    </Link>
                  </li>
                )}
                {user.user && user.token && (
                  <>
                    <li>
                      <Link to="/login">
                        <FontAwesomeIcon icon={faTruck} />
                        <span>Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <UserOutlined />

                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                          <span>
                            {user.user.name} <DownOutlined />{" "}
                          </span>
                        </Dropdown>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.middleBar}>
          <div className="center">
            <Link to="/">
              <img
                className={styles.middleBarLogo}
                src={Logo}
                alt="fairdeal International"
              />
            </Link>
            <div className={styles.search}>
              <form action="/shop">
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
          <div className="center">
            <ul className={styles.categoryBarLinks}>
              {category.categories.map((cl) => {
                return (
                  <li key={cl._id} >
                    <Dropdown
                      overlay={
                        <Menu>
                          {subCategories.map(
                            (sub) =>
                              sub.parent._id === cl._id && (
                                <Menu.Item key={`navbar category ${sub._id}`}>
                                  <Link
                                    className={styles.categoryBarLinksLink}
                                    to={`/shop?sub=${sub.slug}`}
                                  >
                                    {sub.name}
                                  </Link>
                                </Menu.Item>
                              )
                          )}
                        </Menu>
                      }
                      placement="bottomCenter"
                      arrow
                    >
                      <Link to={`/shop?cat=${cl.slug}`}>
                      <span>
                        {cl.name} <DownOutlined />{" "}
                      </span>
                      </Link>
                    </Dropdown>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  category: state.category,
  subCategories: state.subCategory.subCategories,
});

export default connect(mapStateToProps, { signoutUser })(Header);
