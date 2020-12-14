import React, { useState, useEffect } from 'react';
import { Button } from "antd";
import priceFormatter from "../../../functions/priceFormatter";
import { useToasts } from "react-toast-notifications";

import { addDeal, getDeal,removeDeal } from "../../../functions/deal.functions";

function singleCol({ col }) {
    const [val, setVal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isExist , setIsExist] = useState(false);
    const { addToast } = useToasts();

    useEffect(() => {
        getDeal(col._id).then(res => {
            if (res){
                setVal(res.discountPrice);
                setIsExist(true);
            }
        }).catch(err => {

            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })

        })
    }, [])

    const handleSave = async () => {
        if (val > col.price) {
            addToast(`Enter Value less than ${col.price}`, { appearance: 'error', autoDismiss: true })
            return;
        }
        const deal = {
            product: col._id,
            discountPrice: val
        }

        setLoading(true);

        const res = await addDeal(deal);
        if (res.error) {
            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })
        } else {
            addToast(`Deal add success`, { appearance: 'success', autoDismiss: true });
            setIsExist(true);
        }
        setLoading(false);


    }

    const handleDelete = async () =>{
        const res = await removeDeal(col._id);
        if (res.error) {
            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })
        } else {
            addToast(`Deal Remove success`, { appearance: 'success', autoDismiss: true })
        }
        setVal(0);
        setIsExist(false);
    }

    return <tr>
        <td>{col.name}</td>
        <td>{priceFormatter(col.price)}</td>
        <td>
            <input type="number" value={val} onChange={(e) => { setVal(e.target.value) }} />
        </td>
        <th scope="row"><Button type="primary" onClick={handleSave} loading={loading} > Save </Button></th>
        <th scope="row"><Button type="primary" onClick={handleDelete} disabled={!isExist} danger> Delete </Button></th>
    </tr>
}

export default singleCol