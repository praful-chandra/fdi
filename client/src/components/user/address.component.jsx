import React,{useState} from 'react';
import styles from "../../sass/modules/userDashboard/address.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import PopupComponent from "../showPopup.component";
import AddressForm from "./addressForm.component";
import {useSelector} from "react-redux";

 
function addressComponent() {
    const [popup,setPopup] = useState(false);
    const {user : {user :{address}}} = useSelector(state => state);

    return (
        <div className={styles.wrapper}>
            {
                popup && <PopupComponent close={()=>setPopup(false)} child={<AddressForm close={()=>setPopup(false)} />} />
            }
            <h2>Address</h2>

            <div className={styles.addressGrid}>
                {
                    address.map(ad=>(
                        <div className={styles.addressItem}>
                    <span>Address :</span>
                    <p>
                        {ad.address}
                    </p>
                </div>
                    ))
                }

                <div className={`${styles.addressItem} ${styles.addressNew}`} onClick={()=>setPopup(true)}>
                   <FontAwesomeIcon icon={faPlusCircle} />
                </div>
            </div>
        </div>
    )
}

export default addressComponent

