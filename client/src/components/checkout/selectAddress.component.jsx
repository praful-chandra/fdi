import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../../sass/modules/checkout.module.scss";

import PopupComponent from "../showPopup.component";
import AddressForm from "../user/addressForm.component";
import {listAddress} from "../../functions/user.function";

function selectAddressComponent({onSelect}) {
    const {user:{user : {address}}}= useSelector(state => state);
    const dispatch = useDispatch();
    const [isNew,setIsNew] = useState(false);

    useEffect(() => {
        listAddress().then(data=>{
            if(data && !data.error){
                dispatch({type : "UPDATE_ADDRESS" , payload : data})
            }
        })
    }, [isNew])
  
   
    return (
        <div className={styles.componentWrapper} >

            {
                isNew && <PopupComponent child={<AddressForm close={()=>setIsNew(false)}/>} close={()=>setIsNew(false)} />
            }

            <div className={styles.addressGrid}>
        {address.map((ad) => (
          <div
            key={`address card ${ad._id}`}
            onClick={() =>{ onSelect(ad)}}
            className={styles.addressItem}
          >
            <span>Address :</span>
            <p>{ad.address}</p>
            <h4>Phone : {ad.phoneNumber}</h4>
            <h4>Email : {ad.emailAddress}</h4>

          </div>
        ))}

        <div
          className={`${styles.addressItem} ${styles.addressNew}`}
          onClick={() => setIsNew(true)}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
        </div>
    )
}

export default selectAddressComponent;
