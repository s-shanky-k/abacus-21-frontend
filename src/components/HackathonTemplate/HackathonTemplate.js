import styles from "./HackathonTemplate.module.css";
import React, { useState, useEffect } from "react";
import GlowCard from "../GlowCard/GlowCard";
import GlowCardSimple from "../GlowCardSimple/GlowCardSimple"
import GlowCardResponsive from "../GlowCardResponsive/GlowCardResponsive"
import NeonButton from "../NeonButton/NeonButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from "js-cookie"
import { apiGetHackathonRegistration, apiRegisterEvent, apiPayment } from "../../api/api"
import Load from "../Load/Load";
import Modal from "react-modal"
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import Footer from "../Footer/Footer"
import { _register, _paymentConfirmation } from "../../api/hackathonPayment"

Modal.setAppElement('#root')
function EventTemplate({ props }) {

  const history = useHistory()


  const [login, setlogin] = useState(false)
  const [loading, setloading] = useState(true)
  const [paid, setpaid] = useState(false)
  const [registered, setregistered] = useState(false)
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  const [paymentDetails, setpaymentDetails] = useState({})

  useEffect(() => {
    const fetchRegistrations = async (token) => {

      let response = await apiGetHackathonRegistration({ "token": token })
      // Check if registered
      if (response.team !== null) {
        setregistered(true)
        // Paid
        if (response.team.status === "Credit") {
          setpaid(true)
        }
        // Registered but not paid
        else if (response.team.status === "null") {
          setpaid(false)
        }
      }

      setloading(false)

    }

    if (Cookies.get('token') !== undefined) {
      setlogin(true)
      let token = Cookies.get('token')
      fetchRegistrations(token)
    }
    else {
      setloading(false)

    }
    return () => {

    }
  }, [])

  const toggleModal = () => {
    setmodalIsOpen(!modalIsOpen)
  }

  // Payment
  const paymentConfirmation = async () => {
    setloading(true)
    _paymentConfirmation(history, setpaymentDetails, toggleModal, setloading)

  }

  // Register
  const register = () => {
    history.push("/hackathon-form")
    // _register(history, setregistered);
  }

  return (
    <>

      {loading ? <Load /> :
        <>
          {/*About Hackathon*/}
          <div
            className={`${styles._homepage} ${styles.bg1}`}

          >
            <div className={`${styles._about_event}`}>
              <div className={`${styles._glowCardDiv}`}>
                <GlowCardSimple props={{
                  title: props.name,
                  content: props.about
                }} />
              </div>
              <div className={`${styles._eventCardImgDiv}`}>
                <img src={`${process.env.PUBLIC_URL}/images/events/` + `${props.refName}` + `.svg`} alt="" className={styles.eventCardImg} />
                {props.registration &&
                  <div className="my-5">
                    {
                      !registered ?
                        (<NeonButton props={{ text: "Register", onClick: register, color: "#26a0da" }} />)
                        :
                        (!paid ?
                          (<NeonButton props={{ text: "Pay", onClick: paymentConfirmation, color: "#26a0da" }} />)
                          :
                          <p className={`${styles._paymentText}`}>Already Registered and Paid</p>)
                    }
                  </div>
                }
                <Modal isOpen={modalIsOpen} style={{
                  content: {
                    backgroundColor: "#060c21",
                    zIndex: '999',
                    overflowY: 'hidden'
                  },
                  overlay: {
                    backgroundColor: "black",
                    zIndex: '999'
                  }
                }}>
                  <PaymentConfirmation data={paymentDetails} onClose={toggleModal} />
                </Modal>
              </div>
            </div>
          </div>


          {/* Contact-Sponsor/Theme-Platform */}
           <div className={`${styles._homepage} ${styles.bg}`}

          >
            <div className={`${styles._about_event}`}>
              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Contact",
                  contact: props.contact
                }} />
              </div>
              
              {/*
                props.sponsor === undefined 
                ?
                  props.theme !== undefined &&
                  <div className={`${styles._child} `}>
                    <GlowCardSimple props={{ title: "Theme",content:props.theme}} />
                  </div>
                :
                <div className={`${styles._child} `}>
                  <GlowCardResponsive props={{ title: props.sponsor, content: 'Sponsor', img: "events/" + `${props.refName}` + `_sponsor.svg` }} />
                </div>
              }*/}
              

              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Date",
                  list: props.dateTime
                }} />
              </div>
            </div>
          </div> 

          {/* Rules */}
           <div
            className={`${styles._homepage} ${styles.bg1}`}

          >
            <div className={`${styles._rulesDivContainer}`}>
              <div className={`${styles._rulesDiv}`}>
                <GlowCard props={{
                  title: "Rules",
                  list: props.rules,
                  img: "events/rules.svg",
                  textAlign: 'left'
                }} />
              </div>
            </div>
          </div> 


          {/* Rounds or Instructions*/}
          {/* <div
            className={`${styles._homepage} ${styles.bg}`}

          >
            {props.rounds === undefined 
            ?
            <div className={`${styles._rulesDivContainer}`}>
              <div className={`${styles._rulesDiv}`}>
                <GlowCard props={{
                  title: "Instructions",
                  un_list: props.instructions,
                  img: "events/rules.svg",
                  textAlign: 'left'
                }} />
              </div>
            </div>
            :
            <div className={`${styles._rulesDivContainer1}`}>
              <div className={`${styles._rulesDiv1}`}>
                <GlowCardSimple props={{
                  title: "Rounds",
                  rounds: props.rounds,
                }} />
              </div>
              {props.registration &&
                <div className="my-5">
                  {
                    !registered ?
                      (<NeonButton props={{ text: "Register", onClick: register, color: "#26a0da" }} />)
                      :
                      (!paid ?
                        (<NeonButton props={{ text: "Pay", onClick: paymentConfirmation, color: "#26a0da" }} />)
                        :
                        <p style={{ color: "white" }}>Already Paid</p>)
                  }
                </div>
              } */}


          {/* Modal */}
          {/* <Modal isOpen={modalIsOpen} style={{
                content: {
                  backgroundColor: "#060c21",
                  zIndex: '999',
                  overflowY: 'hidden'
                },
                overlay: {
                  backgroundColor: "black",
                  zIndex: '999'
                }
              }}>
                <PaymentConfirmation data={paymentDetails} onClose={toggleModal} />
              </Modal>
              <div>

              </div>
            </div>
            }
            
          </div> */}
          <Footer />
        </>
      }

    </>
  );
}

export default EventTemplate;
