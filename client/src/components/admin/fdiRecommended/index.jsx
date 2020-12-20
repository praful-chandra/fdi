import React, { useState, useEffect } from 'react';
import { Button,Popconfirm } from "antd";
import styles from "../../../sass/modules/adminDashboard/deal.module.scss";
import { useToasts } from "react-toast-notifications";

import CreateFDIComponent from "./createFDI.component";

import {listFdiR,addFdiR} from "../../../functions/fdir.function";

function Index() {
  const [fdirs, setFdirs] = useState([]);
  const [reset,setReset] = useState(false);
  const { addToast } = useToasts();
  useEffect(() => {
    listFdiR().then(res => {
        if (res)
            setFdirs(res);
    }).catch(err => {
        addToast("Some error had occured", { appearance: 'error', autoDismiss: true })
    })
},[reset]);

const handleDelete = async product =>{
  try{
      const data = await addFdiR(product);
      setReset(!reset);
  }catch(err){
      addToast("Some error had occured", { appearance: 'error', autoDismiss: true })
  }
}



    return (
      <div className={styles.indexWrapper}>
      <h1 className={styles.heading} >FDI Recommended</h1>
      <CreateFDIComponent reset={()=>setReset(!reset)} />

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
                       fdirs.map((b,i)=>{
                           return  <tr>
                           <th scope="row">{i + 1}</th>
                           <td>
                          {  b.product.product.images[0] &&   <img style={{maxWidth : "50px"}} src={`${process.env.REACT_APP_API_ROOT_URI}${b.product.product.images[0].thumb}`} />}
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

export default Index
