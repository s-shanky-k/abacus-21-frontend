import React, { Component } from 'react'
import styles from './RowTableDiv.module.css'


export class RowTableDiv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className={styles.rowTableDiv}>
                <div className={styles.cellTableDiv}>
                    <p>{this.props.item}</p>
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
}

export default RowTableDiv

