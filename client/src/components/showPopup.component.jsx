import React from 'react';

import styles from "../sass/modules/popup.module.scss";

function showPopupComponent({child , close}) {
    return (
        <div className={styles.popup}>
       <div className={styles.popupBg} onClick={close} ></div>
       <div className={styles.popupContent}> 
            {child}
       </div>
     </div>
    )
}

export default showPopupComponent
