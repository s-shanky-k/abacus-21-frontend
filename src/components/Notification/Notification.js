import React from 'react'
import styles from "./Notification.module.css"

function Notification({closeToast}) {
    return (
        <div className={styles.notify_div}>
            Custom Component
            <button onClick={closeToast}>Close</button>
        </div>
    )
}

export default Notification
