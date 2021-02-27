import React, { Component } from 'react'
import styles from "./Dashboard.module.css"

export class Dashboard extends Component {
    render() {
        return (
            <div className={`${styles._dashboard_wrapper}`}>
                <h1>DASHBOARD KABOOM</h1>
            </div>
        )
    }
}

export default Dashboard
