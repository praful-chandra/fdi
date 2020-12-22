import React, { useState,useEffect } from "react";
import styles from "../../sass/modules/userDashboard/address.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import PopupComponent from "../showPopup.component";
import AddressForm from "./addressForm.component";
import { useSelector,useDispatch } from "react-redux";
import {listAddress} from "../../functions/user.function";

function addressComponent() {
    const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(false);
  const {
    user: {
      user: { address },
    },
  } = useSelector((state) => state);

  useEffect(() => {
      listAddress().then(data=>{
          if(data && !data.error){
              dispatch({type : "UPDATE_ADDRESS" , payload : data})
          }
      })
  }, [popup])

  return (
    <div className={styles.wrapper}>
      {popup && (
        <PopupComponent
          close={() => {setPopup(false); setSelectedAddress(false)}}
          child={
            <AddressForm
              selected={selectedAddress}
              close={() => {setPopup(false); setSelectedAddress(false)}}
            />
          }
        />
      )}
      <h2>Address</h2>

      <div className={styles.addressGrid}>
        {address.map((ad) => (
          <div
            key={`address card ${ad._id}`}
            onClick={() =>{ setSelectedAddress(ad); setPopup(true)}}
            className={styles.addressItem}
          >
            <span>Address :</span>
            <p>{ad.address}</p>
          </div>
        ))}

        <div
          className={`${styles.addressItem} ${styles.addressNew}`}
          onClick={() => setPopup(true)}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
    </div>
  );
}

export default addressComponent;
