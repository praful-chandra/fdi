import React from 'react'
import styles from "../sass/modules/primaryButton.module.scss";

export default function primaryButton({title}) {
    return (
        <button className={styles.primaryBtn} >
             {title}
        </button>
    )
}
