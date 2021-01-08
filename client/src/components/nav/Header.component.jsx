/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMapMarkerAlt,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown, Badge, Affix } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  HomeFilled,
  ShoppingFilled,
  HeartFilled,
} from "@ant-design/icons";

import styles from "../../sass/modules/navbar.module.scss";
import Logo from "../../logo.svg";

import { signoutUser } from "../../redux/actions/userActions";
import { getCart, getLocalCart } from "../../redux/actions/cartActions";
import {listWishList} from "../../redux/actions/wishListActions";
import { roleBasedRedirect } from "../../functions/auth.function";
import priceFormatter from "../../functions/priceFormatter";

import CartSlider from "./cartSlider";
import NavBarMobile from "./navbarMobile";

function Header({
  user,
  signoutUser,
  category,
  subCategories,
  getCart,
  cartItems,
  getLocalCart,
  totalPrice,
  wishList,
  listWishList
}) {
  let history = useHistory();
  const handleSearchQuery = (str) => {
    let trimedString = str.substring(1);
    trimedString = trimedString.split("=");

    return {
      name: trimedString[0] ? trimedString[0] : null,
      value: trimedString[1] ? trimedString[1].replaceAll("+", " ") : null,
    };
  };

  const [search, setSearch] = useState("");
  const [cartSlider, setCartSlider] = useState(false);

  useEffect(() => {
    let query = handleSearchQuery(history.location.search);
    if (query.name && query.name === "search" && query.value) {
      setSearch(query.value);
    }
  }, []);

  useEffect(() => {
    let localC = window.localStorage.getItem("cart");
    if (user.user && user.token) {
      if(!localC || localC === '[]'){
        getCart();
      }
      listWishList()
    } else {
      getLocalCart();
    }
  }, [user.user]);

  useEffect(() => {
    
  }, [wishList])

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
      <CartSlider
        status={cartSlider}
        cartItems={cartItems}
        setClose={() => {
          setCartSlider(false);
        }}
      />
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
                      <Link to="/user/dashboard">
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

        <Affix offsetTop={0}>
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>

              <div className={styles.middleBarLinks}>
                <ul>
                  {
                    user.user && (
                      <li>
                    <Link to="/wishList" >
                    <Badge count={wishList.length}>
                      <HeartFilled />
                    </Badge>
                    </Link>
                  </li>
                    )
                  }
                  <li onClick={() => setCartSlider(true)}>
                    <Badge count={cartItems.length}>
                      <ShoppingFilled />
                    </Badge>
                    <span>{priceFormatter(totalPrice)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Affix>

        <div className={styles.categoryBar}>
          <div className="center">
            <ul className={styles.categoryBarLinks}>
              {category.categories.map((cl) => {
                return (
                  <li key={cl._id}>
                    <Dropdown
                      overlay={
                        <Menu>
                          {subCategories.map(
                            (sub) =>
                              sub.parent._id === cl._id && (
                                <Menu.Item key={`navbar category ${sub._id}`}>
                                  <a
                                    className={styles.categoryBarLinksLink}
                                    href={`/subcategory/${sub.slug}`}
                                  >
                                    {sub.name}
                                  </a>
                                </Menu.Item>
                              )
                          )}
                        </Menu>
                      }
                      placement="bottomCenter"
                      arrow
                    >
                      <a href={`/category/${cl.slug}`}>
                        <span>
                          {cl.name} <DownOutlined />{" "}
                        </span>
                      </a>
                    </Dropdown>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    <div className={styles.mobile}>
    <Affix offsetTop={0}>
     <NavBarMobile logOut={signoutUser} cartItems={cartItems} totalPrice={totalPrice} />
      </Affix>
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  category: state.category,
  subCategories: state.subCategory.subCategories,
  cartItems: state.cart.items,
  totalPrice: state.cart.totalPrice,
  wishList : state.wishList
});

export default connect(mapStateToProps, { signoutUser, getCart, getLocalCart ,listWishList})(
  Header
);
