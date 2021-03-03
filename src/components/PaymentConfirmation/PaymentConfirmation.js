import React from 'react'
import styles from "./PaymentConfirmation.module.css"
import Modal from "react-modal"
import Heading from '../Heading/Heading'
import NeonButton from '../NeonButton/NeonButton'
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp';

export default function PaymentConfirmation({ data, onClose }) {

    const payment = (link) => {
        window.location = link
    }

    return (
        <div className={`${styles.paymentWrapper}`}>
            <div style={{ textAlign: "center" }}>
                <Heading text="Payment Confirmation" fontSize="25px" />
            </div>
            <div className={`${styles.detailsWrapper}`}>
                <div className={`${styles.userDetails}`}>
                    <p className={`${styles.userDetailsText}`}><PersonIcon className={`${styles.icon}`} />{data.name}</p>
                    <p className={`${styles.userDetailsText}`}><MailOutlineIcon className={`${styles.icon}`} />{data.email}</p>
                    <p className={`${styles.userDetailsText}`}><PhoneIcon className={`${styles.icon}`} />{data.phone}</p>
                </div>
                <div className={`${styles.paymentDetails}`}>
                    <span className={`${styles.paymentDetailsTitle}`}>Payment Request <PaymentIcon className={`${styles.icon}`} /></span><p className={`${styles.userDetailsText} ${styles.userDetailsTextBreak}`}>{data.paymentrequestid}</p>
                    <p className={`${styles.userDetailsText}`}><AttachMoneySharpIcon className={`${styles.icon}`} />{data.amount}</p>
                    <span className={`${styles.paymentDetailsTitle}`}>Purpose</span><p className={`${styles.userDetailsText}`}>{data.purpose}</p>
                    <div style={{ textAlign: "center" }} className={`${styles.buttonDiv}`}>
                        <NeonButton props={{ text: "Confirm", color: "#26a0da", onClick: payment, parameters: data.link }} />
                        <NeonButton props={{ text: "Cancel", color: "red", onClick: onClose }} />
                    </div>
                </div>
            </div>
        </div>


    )
}
