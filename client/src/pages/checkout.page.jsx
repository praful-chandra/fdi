import React, { useState } from "react";
import { Steps, Button, message } from "antd";
const { Step } = Steps;

import styles from "../sass/modules/checkout.module.scss";

import SelectAddress from "../components/checkout/selectAddress.component";
import CartPage from "../pages/cart.page";

function checkoutPage() {
  const [current, setCurrent] = useState(0);

  const [address,setAddress] = useState(false);
  const [cart,setCart] = useState(false);


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const steps = [
    {
      title: "Address",
      content: <SelectAddress onSelect={(add) =>{ setAddress(add); next()}} />,
    },
    {
      title: "Review",
      content: <CartPage review={true} next={(cartFull) => {setCart(cartFull);next()}} />,
    },
    {
      title: "Payment",
      content: <div>
          {JSON.stringify(cart)}
      </div>,
    },
  ];

  console.log(cart);

  return (
    <div className={`center ${styles.wrapper}`}  >
      <Steps current={current} type="navigation" status="process" >
        {steps.map((item) => (
          <Step  key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
}

export default checkoutPage;
