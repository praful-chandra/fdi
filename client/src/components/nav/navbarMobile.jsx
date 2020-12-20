import React,{useState,useEffect} from "react";
import styles from "../../sass/modules/mobileNavbar.module.scss";
import Logo from "../../logo.svg";
import {MenuOutlined,HeartFilled,ShoppingFilled} from "@ant-design/icons";
import {Badge} from "antd";
import priceFormatter from "../../functions/priceFormatter"
import CartSlider from "./cartSlider";
import MenuSlider from "./mobileMenuSlider";

function navbarMobile({cartItems}) {
    const [sideCart,setSideCart] = useState(false);
    const [menu,setMenu] = useState(false);
  return (
    <nav className={styles.mobile}>
        <CartSlider
        status={sideCart}
        cartItems={cartItems}
        width="70%"
        setClose={() => {
          setSideCart(false);
        }}
      />
      <MenuSlider status={menu} setClose={()=>{setMenu(false)}} />
        <div className={styles.hamburger} onClick={()=>setMenu(true)}>
        <MenuOutlined />
        </div>
        <img src={Logo} className={styles.mobileLogo} alt="FairdealInternational"/>
        <div className={styles.middleBarLinks} onClick={()=>setSideCart(true)}>
                <ul>
                  <li>
                    <Badge count={cartItems.length}>
                      <ShoppingFilled />
                    </Badge>
                  </li>
                </ul>
              </div>

    </nav>
  );
}

export default navbarMobile;
