import React, { Component } from 'react'
import styles from "./Dev.module.css"

export class Dev extends Component {
    render() {
        return (
            <div className={`${styles.inner}`}>
            <p>10%</p>
          </div> 
        )
    }
}

export default Dev