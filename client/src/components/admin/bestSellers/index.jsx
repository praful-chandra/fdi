import React, { useState, useEffect } from 'react';
import { Button,Popconfirm } from "antd";
import styles from "../../../sass/modules/adminDashboard/deal.module.scss";
import { useToasts } from "react-toast-notifications";
import CreateBSComponent from "./createBS.component";

import { listBestSeller, addBestSeller } from "../../../functions/bestSeller.function";

export default function Index() {

    const [bests, setBests] = useState({
        bests : []
    });
    const [reset,setReset] = useState(false);
    const { addToast } = useToasts();
    
    useEffect(() => {
        listBestSeller().then(res => {
            if (res)
                setBests(res);
        }).catch(err => {
            addToast("Some error had occured", { appearance: 'error', autoDismiss: true })
        })
    },[reset]);

    const handleDelete = async product =>{
        try{
            const data = await addBestSeller(product);
            setReset(!reset);
        }catch(err){
            addToast("Some error had occured", { appearance: 'error', autoDismiss: true })
        }
    }

    return (
        <div className={styles.indexWrapper}>
            <h1 className={styles.heading} >Best Sellers</h1>
            <CreateBSComponent reset={()=>setReset(!reset)} />

            <table className="table table-striped" style={{fontSize : '2rem'}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       bests.bests.map((b,i)=>{
                           return  <tr>
                           <th scope="row">{i + 1}</th>
                           <td>
                             {
                                b.product.product.images[0] &&   <img style={{maxWidth : "50px"}} src={`${process.env.REACT_APP_API_ROOT_URI}${b.product.product.images[0].thumb}`} />
                             }
                           </td>
                           <td>
                               {
                                  ` ${b.product.product.name} (${b.product.variance.title})(${b.product.name})`
                               }
                           </td>
                           <td>
                               <Popconfirm
                               title="Do you want to delete this ?"
                               onConfirm={()=>handleDelete(b.product._id)}
                               >
                               <Button type="primary" danger
                               >Delete</Button>
                                    </Popconfirm>
                           </td>
                       </tr>
                       })
                   }
                   
                </tbody>
            </table>
        </div>
    )
}
