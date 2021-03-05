import { Component, useState, useEffect } from 'react'
import styles from './RowTableDiv.module.css'
import { _register, _paymentConfirmation } from "../../../api/payment"
import Modal from "react-modal"
import PaymentConfirmation from "../../PaymentConfirmation/PaymentConfirmation";
import { useHistory, Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



import React from 'react'
import Load from '../../Load/Load';

function RowTableDiv(props) {

    const history = useHistory()
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [paymentDetails, setpaymentDetails] = useState({})
    const [registered, setregistered] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {

        return () => {

        }
    }, [])




    const toggleModal = () => {
        setmodalIsOpen(!modalIsOpen)
    }

    // Payment
    const paymentConfirmation = async () => {
        setloading(true)
        _paymentConfirmation(history, setpaymentDetails, toggleModal, { "purpose": props.item.purpose }, setloading)
    }

    // Register
    const register = (forceUpdate) => {
        _register(history, setregistered, { "purpose": props.item.purpose });
    }

    let render_data1 = [<p>Not Registered</p>]
    let render_data2 = [<Link to={props.item.url} className={`${styles.link}`}>Register<ArrowRightIcon /></Link>]

    if (props.item && props.registrationDetails) {
        for (let i = 0; i < props.registrationDetails.length; i++) {
            if (props.registrationDetails[i].purpose === props.item.purpose) {
                render_data1 = []
                render_data2 = []
                // Paid
                if (props.registrationDetails[i].status === "Credit") {
                    render_data1.push(
                        <p>Paid</p>
                    )
                    render_data2.push(
                        <Tooltip title="Payment ID" arrow placement="right">
                            <p className={`${styles.wordBreak}`}>{props.registrationDetails[i].paymentid}</p>
                        </Tooltip>

                    )
                }
                else if (props.registrationDetails[i].status === null) {
                    render_data1.push(
                        <p>Not Paid</p>
                    )
                    render_data2.push(
                        <Link onClick={paymentConfirmation} className={`${styles.link}`}>Pay<ArrowRightIcon /></Link>
                    )
                }


            }
        }
    }




    return (
        <>
            <div className={styles.rowTableDiv}>
                <div className={styles.cellTableDiv}>
                    <p className={`${styles.title}`}>{props.item.title}</p>
                </div>

                <div className={styles.cellTableDiv}>
                    {render_data1}
                </div>

                <div className={`${styles.cellTableDiv} ${styles.wordBreak}`}>
                    {render_data2}
                </div>
            </div>

            {props.hr && <hr className={`${styles.hrBreak}`} />}

            {/* Modal */}
            {loading ? <Load /> : <Modal isOpen={modalIsOpen} style={{
                content: {
                    backgroundColor: "#060c21",
                    zIndex: '999'
                },
                overlay: {
                    backgroundColor: "black",
                    zIndex: '999'
                }
            }}>
                <PaymentConfirmation data={paymentDetails} onClose={toggleModal} />
            </Modal>}

        </>
    )
}

export default RowTableDiv
