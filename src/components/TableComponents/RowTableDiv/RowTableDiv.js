import React, { Component } from 'react'
import styles from './RowTableDiv.module.css'
import { _register, _paymentConfirmation } from "../../../api/payment"


export class RowTableDiv extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {
    }

    render() {

        let render_data1 = [<p>Not Registered</p>]
        let render_data2 = [<p>Register Link</p>]

        if (this.props.item && this.props.registrationDetails) {
            for (let i = 0; i < this.props.registrationDetails.length; i++) {
                if (this.props.registrationDetails[i].purpose === this.props.item.purpose) {
                    render_data1 = []
                    // Paid
                    if (this.props.registrationDetails[i].status === "Credit") {
                        render_data1.push(
                            <p>Paid</p>
                        )
                        render_data2.push(
                            <p>Transaction ID</p>
                        )
                    }
                    else if (this.props.registrationDetails[i].status === null) {
                        render_data1.push(
                            <p>Payment Link</p>
                        )
                    }


                }
            }
        }


        return (
            <div className={styles.rowTableDiv}>
                <div className={styles.cellTableDiv}>
                    <p>{this.props.item.title}</p>
                </div>

                <div className={styles.cellTableDiv}>
                    {render_data1}
                </div>

                <div className={styles.cellTableDiv}>
                    {render_data2}
                </div>
            </div>
        )
    }
}

export default RowTableDiv

