import React from "react";
import NumberFormat from 'react-number-format';

export default (num) =>{
    return    <NumberFormat thousandSeparator={true} displayType={'text'}  thousandsGroupStyle="lakh" prefix={'₹'} value={num}/>
          
}