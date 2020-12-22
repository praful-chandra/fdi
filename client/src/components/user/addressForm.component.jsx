import { Button } from 'antd';
import React,{useState} from 'react';

import styles from "../../sass/modules/userDashboard/address.module.scss";
import {addAddress,deleteAddress,updateAddress} from "../../functions/user.function";


const initState = {
    firstName : "",
    lastName : "",
    emailAddress : "",
    phoneNumber : "",
    country : "",
    gst : "",
    address : "",
    city : "",
    state : "",
    pin : ''
  }

function addressFormComponent({close,selected}) {
    const [address,setAddress] = useState(selected || initState);


    const handleAddressChange  = e =>{
        const name = e.target.name;
        const value = e.target.value;

        setAddress(oa=>({...oa , [name] : value}));
    }

    const handleAddessSave = async (e) =>{
        e.preventDefault();


        const res = selected ? await updateAddress(selected._id,address) : await addAddress(address)  ;
        if(res.success){
            close();
        }
    }

    const handleDelete = async() =>{
        const res = await deleteAddress(selected._id);
        if(res.success){
            close();
        }
    }
    return (
        <div className={styles.addressForm}>
            <form onSubmit={handleAddessSave}>
                <button onClick={close} className={styles.close}>close</button>
                <div className="row">
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={address.firstName} onChange={handleAddressChange} />
                    </div>
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={address.lastName} onChange={handleAddressChange} />
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="emailAddress">Email</label>
                        <input type="email" name="emailAddress" id="emailAddress" value={address.emailAddress} onChange={handleAddressChange} />
                    </div>
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" value={address.phoneNumber} onChange={handleAddressChange} />
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" value={address.country} onChange={handleAddressChange} />
                    </div>
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="gst">GST Number</label>
                        <input type="text" name="gst" id="gst" value={address.gst} onChange={handleAddressChange} />
                    </div>
                </div>

                <div className="row">
                <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="address">Address</label>
                        <textarea rows="15" style={{padding : "2rem"}} value={address.address} name="address"onChange={handleAddressChange} >
                             </textarea>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="city">city</label>
                        <input type="text" name="city" id="city" value={address.city} onChange={handleAddressChange} />
                    </div>
                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="state">state</label>
                        <input type="text" name="state" id="state" value={address.state} onChange={handleAddressChange} />
                    </div>

                    <div className={`col-md ${styles.inputGroup}`}>
                        <label htmlFor="pincode">PIN</label>
                        <input type="number" name="pin" id="pinCode" value={address.pin} onChange={handleAddressChange} />
                    </div>
                </div>

                <Button type="primary" onClick={handleAddessSave}> Save </Button>

                {
                    selected && <Button type="primary" danger onClick={handleDelete}> Delete </Button>
                }

            </form>
        </div>
    )
}

export default addressFormComponent

