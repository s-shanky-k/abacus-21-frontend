import React, { Component } from 'react'
import styles from "./Footer.module.css"

export class Footer extends Component {
    render() {
        return (
            <div className={`${styles._footer_container}`}>
                <p>This is Kabooom-Footer</p>
                <p>This is Kabooom-Footer</p>
                <p>This is Kabooom-Footer</p>
                <p>This is Kabooom-Footer</p>
                <p>This is Kabooom-Footer</p>
                <p>This is Kabooom-Footer</p>
            </div>
        )
    }
}

export default Footer