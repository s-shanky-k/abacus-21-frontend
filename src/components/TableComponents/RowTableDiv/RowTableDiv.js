import { Component, useState, useEffect } from 'react'
import styles from './RowTableDiv.module.css'
import { _register, _paymentConfirmation } from "../../../api/payment"
import Modal from "react-modal"
import PaymentConfirmation from "../../PaymentConfirmation/PaymentConfirmation";
import { useHistory } from 'react-router-dom';



import React from 'react'

function RowTableDiv(props) {

    const history = useHistory()
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [paymentDetails, setpaymentDetails] = useState({})
    const [registered, setregistered] = useState(false)

    useEffect(() => {

        return () => {

        }
    }, [])




    const toggleModal = () => {
        setmodalIsOpen(!modalIsOpen)
    }

    // Payment
    const paymentConfirmation = async () => {
        console.log("ACBCSHJDBFHBHJDJEHJF")
        _paymentConfirmation(history, setpaymentDetails, toggleModal, { "purpose": props.item.purpose })

    }

    // Register
    const register = () => {
        _register(history, setregistered, { "purpose": props.item.purpose });
    }

    let render_data1 = [<p>Not Registered</p>]
    let render_data2 = [<p onClick={register}>Register Link</p>]

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
                        <p>Transaction ID</p>
                    )
                }
                else if (props.registrationDetails[i].status === null) {
                    render_data1.push(
                        <p>Not Paid</p>
                    )
                    render_data2.push(
                        <p onClick={paymentConfirmation}>Payment Link</p>
                    )
                }


            }
        }
    }




    return (
        <>
            <div className={styles.rowTableDiv}>
                <div className={styles.cellTableDiv}>
                    <p>{props.item.title}</p>
                </div>

                <div className={styles.cellTableDiv}>
                    {render_data1}
                </div>

                <div className={styles.cellTableDiv}>
                    {render_data2}
                </div>
            </div>
            {/* Modal */}
            <Modal isOpen={modalIsOpen} style={{
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
            </Modal>
        </>
    )
}

export default RowTableDiv
