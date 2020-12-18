import {cartTypes} from "../types";
import axios from "axios";


export const addCart = ()=> dispatch =>{

    try{

    }catch(err){
        return {
            error: (err.response && err.response.data) || "Some error occured",
          };
    }

}