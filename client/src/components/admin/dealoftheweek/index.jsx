import React, { useState, useEffect } from 'react';
import {Card,Popconfirm} from "antd";
import {EditFilled,DeleteFilled} from "@ant-design/icons";
import styles from "../../../sass/modules/adminDashboard/deal.module.scss";
import {useToasts} from "react-toast-notifications";
import PopupComponent from "../../showPopup.component";
import CreateDowComponent from "./createDow";


import { listDeals ,removeDeal} from "../../../functions/deal.functions";

function index() {

    const [deals, setDeals] = useState({deals : [],totalCount : 0});
    const [edit,setEdit] = useState(false)
    const {addToast} = useToasts();

    useEffect(() => {
        listDeals().then(data => {
            if (!data.error) {
                setDeals(data)
            }
        })
    }, [edit])

    const handleDelete =async id =>{
        const res = await removeDeal(id);
        if (res.error) {
            addToast(`Error occured`, { appearance: 'error', autoDismiss: true })
        } else {
            addToast(`Deal Remove success`, { appearance: 'success', autoDismiss: true });
            listDeals().then(data => {
                if (!data.error) {
                    setDeals(data)
                }
            })
        }
    }

    return (
        <div className={styles.indexWrapper}>
                    <h1 className={styles.heading} >Deal of the week</h1>

            <CreateDowComponent product={edit} closeEdit={()=>setEdit(false)}/>

           <div className={styles.dealsListWrapper}>
           {
                deals.deals.map(dl=>{
                    return <Card
                    key={`deal card ${dl._id}`}
                    hoverable
                    style={{width : 300}}
                    cover={dl.product.product.images[0] && <img src={`${process.env.REACT_APP_API_ROOT_URI}${dl.product.product.images[0].thumb}`}/>}
                    actions={[
                        <EditFilled onClick={()=>{setEdit(dl.product.product.slug)}} />,
                        <Popconfirm title="Do you want to delete ?" 
                        onConfirm={()=>handleDelete(dl.product._id)}>
                            <DeleteFilled />
                        </Popconfirm>
                    ]}
                    >
                        <Card.Meta title={dl.product.product.name} description={`(${dl.product.variance.title})(${dl.product.name})`} />
                    </Card>
                })
            }
           </div>
            
        </div>
    )
}

export default index
