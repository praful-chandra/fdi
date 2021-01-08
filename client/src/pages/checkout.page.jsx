import React, { useState } from "react";
import {Steps} from "antd";
const { Step } = Steps;
import {isMobile} from "react-device-detect";
import styles from "../sass/modules/checkout.module.scss";

import SelectAddress from "../components/checkout/selectAddress.component";
import CartPage from "../pages/cart.page";
import PaymentComponent from "../components/checkout/payment.component";


function checkoutPage(props) {
  const [current, setCurrent] = useState(0);

  const [address,setAddress] = useState(false);
  const [cart,setCart] = useState(false);


  const next = () => {
    setCurrent(current + 1);
  };

  const buyNow = props.location.state ? props.location.state.buyNow : null;

  const steps = [
    {
      title: "Address",
      content: <SelectAddress onSelect={(add) =>{ setAddress(add); next()}} />,
    },
    {
      title: "Review",
      content: <CartPage review={true} buyNow={buyNow} next={(cartFull) => {setCart(cartFull);next()}} />,
    },
    {
      title: "Payment",
      content: <PaymentComponent cart={cart} address={address} />,
    },
  ];


  return (
    <div className={`center ${styles.wrapper}`}  >
      <Steps current={current} type="navigation" status="process" >
        {steps.map((item,ind) => (
          <Step  key={item.title} title={item.title} style={{display : isMobile && ind !== current ? "none" : "initial"}} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
}

export default checkoutPage;
