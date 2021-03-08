import { Component, useState, useEffect } from 'react'
import styles from './RowTableDiv.module.css'
import { _register, _paymentConfirmation } from "../../../api/payment"
import { _paymentConfirmation as hack_pay } from "../../../api/hackathonPayment"
import Modal from "react-modal"
import PaymentConfirmation from "../../PaymentConfirmation/PaymentConfirmation";
import { useHistory, Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



import React from 'react'
import Load from '../../Load/Load';
import HackathonDetails from '../../HackathonDetails/HackathonDetails';

function RowTableDiv(props) {

    const history = useHistory()
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [hack_modalIsOpen, sethack_modalIsOpen] = useState(false)
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

    const hack_toggleModal = () => {
        sethack_modalIsOpen(!hack_modalIsOpen)
    }

    // Payment
    const paymentConfirmation = async () => {
        setloading(true)
        _paymentConfirmation(history, setpaymentDetails, toggleModal, { "purpose": props.item.purpose }, setloading)
    }

    const hack_paymentConfirmation = async () => {
        setloading(true)
        hack_pay(history, setpaymentDetails, toggleModal, setloading)
    }

    // Register
    const register = (forceUpdate) => {
        _register(history, setregistered, { "purpose": props.item.purpose });
    }


    let render_data1 = [<p>Not Registered</p>]
    let render_data2 = [<p to={props.item.url} className={`${styles.link}`}>Register<ArrowRightIcon /></p>]

    if (props.item && props.type === "events" && props.registrationDetails) {
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
                        <p onClick={paymentConfirmation} className={`${styles.link}`}>Pay<ArrowRightIcon /></p>
                    )
                }

                else if (props.registrationDetails[i].status === "Failed") {
                    render_data1.push(
                        <p>Payment Failed</p>
                    )
                    render_data2.push(
                        <p onClick={paymentConfirmation} className={`${styles.link}`}>Retry<ArrowRightIcon /></p>
                    )
                }


            }
        }
    }
    else if (props.item && props.type === "hackathon") {
        if (props.registrationDetails.team === null) {

        }
        else {
            if (props.registrationDetails.team.status === "Credit") {
                render_data1 = []
                render_data2 = []
                render_data1.push(
                    // <p>Paid</p>
                    <p onClick={hack_toggleModal}>Team Details</p>
                )
                render_data2.push(
                    <Tooltip title="Payment ID" arrow placement="right">
                        <p className={`${styles.wordBreak}`}>{props.registrationDetails.paymentid}</p>
                    </Tooltip>

                )
            }
            else if (props.registrationDetails.team.status === null) {
                render_data1 = []
                render_data2 = []
                render_data1.push(
                    // <p>Not Paid</p>
                    <p onClick={hack_toggleModal} className={`${styles.link}`}>Team Details</p>
                )
                render_data2.push(
                    <p onClick={hack_paymentConfirmation} className={`${styles.link}`}>Pay<ArrowRightIcon /></p>
                )
            }

            else if (props.registrationDetails.team.status === "Failed") {
                render_data1 = []
                render_data2 = []
                render_data1.push(
                    <p>Payment Failed</p>
                )
                render_data2.push(
                    <p onClick={hack_paymentConfirmation} className={`${styles.link}`}>Retry<ArrowRightIcon /></p>
                )
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

            {props.type === "hackathon" && <Modal isOpen={hack_modalIsOpen} style={{
                content: {
                    backgroundColor: "#060c21",
                    zIndex: '999'
                },
                overlay: {
                    backgroundColor: "black",
                    zIndex: '999'
                }
            }}>
                <HackathonDetails data={props.registrationDetails.team} onClose={hack_toggleModal} />
            </Modal>}


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
