import React, { useState, useEffect, Component } from 'react'
import styles from './MainTableDiv.module.css'
import RowTableDiv from '../RowTableDiv/RowTableDiv.js'


export class MainTableDiv extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    componentDidMount() {
        // console.log('CHILD DATA', this.props.data);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('props in child component', this.props.data);
    }

    render() {

        let render_data = [];
        if (this.props.data && this.props.data.length > 0) {
            for (let i = 0; i < this.props.data.length; i++) {
                render_data.push(
                    < RowTableDiv key={i} item={this.props.data[i]} registrationDetails={this.props.registrationDetails} />
                    // <div key={i} style={{ color: "white" }}>{this.props.data[i]}</div>
                )
            }
        }

        return (
            <div className={styles.mainTableDiv} >
                { render_data}
            </div>
        )
    }
}

export default MainTableDiv
