import React from 'react'
import styles from './RowTableDiv.module.css'

export default function RowTableDiv(props) {
    return (
        <div className={styles.rowTableDiv}>
            <div className={styles.cellTableDiv}>
                <p>{props.item}</p>
            </div>
            <div className={styles.cellTableDiv}>
                <p>Paid</p>
            </div>
            <div className={styles.cellTableDiv}>
                <p>1243628723878</p>
            </div>
        </div>
    )
}
