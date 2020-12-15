import React, { useState, useEffect } from 'react';
import { Switch } from "antd";
import priceFormatter from "../../../functions/priceFormatter";
import { useToasts } from "react-toast-notifications";

import {addFdiR,getFdiR} from "../../../functions/fdir.function";

function singleCol({ col }) {
    const [val, setVal] = useState(false);
    const [loading, setLoading] = useState(false);
    const { addToast } = useToasts();
    useEffect(() => {
        getFdiR(col._id).then(res => {
            if (res){
                setVal(res);
            }
        }).catch(err => {

            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })

        })
    }, [])

    const handleSave = async () => {

        setVal(!val);
        
        setLoading(true);

        const res = await addFdiR(col._id);
        if (res.error) {
            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })
        } else {
            addToast(`Toggle Deal Success`, { appearance: 'success', autoDismiss: true });
        }
        setLoading(false);


    }

    

    return <tr>
        <td>{col.name}</td>
        <td>{priceFormatter(col.price)}</td>
        <td>
            <Switch checked={val} onChange={handleSave} loading={loading }/>
        </td>
    </tr>
}

export default singleCol