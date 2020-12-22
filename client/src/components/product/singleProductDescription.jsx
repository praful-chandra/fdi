import React from 'react';
import ReactQuill from "react-quill";
import styles from "../../sass/modules/singleProduct/singleProduct.module.scss";

function singleProductDescription({body}) {
    return (
        <div className={styles.description}>
          <div className={styles.head}>
            <div>
              <h5>Description</h5>
            </div>
          </div>

          <div className={styles.descriptionBody}> 
            <ReactQuill
                value={body}
                readOnly={true}
                // theme={"bubble"}
                modules={{toolbar : false}}
             />
           </div>
        </div>
    )
}

export default singleProductDescription
 