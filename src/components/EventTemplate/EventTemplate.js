import styles from "./EventTemplate.module.css";
import React, { useState, useEffect } from "react";
import GlowCard from "../GlowCard/GlowCard";
import GlowCardSimple from "../GlowCardSimple/GlowCardSimple"
import GlowCardResponsive from "../GlowCardResponsive/GlowCardResponsive"
import NeonButton from "../NeonButton/NeonButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from "js-cookie"
import { apiGetRegistrations, apiRegisterEvent, apiPayment } from "../../api/api"
import Load from "../Load/Load";
import Modal from "react-modal"
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import Footer from "../Footer/Footer"
import { _register, _paymentConfirmation } from "../../api/payment"

/* 
<EventTemplate props = {name:"Tenet",
                        refName:"tenet",
                        about:"TENET is a challenge where the participants have to identify and resolve bugs, which makes the system unproblematic. Logical thinking of the programmer is tested through this event where the participant has to come up with unique solutions to produce an expected output.",
                        rules:["A domain will be given on the day of hackathon",
                              "The teams should develop a software in the same domain.",
                              "A team must consist of 2 members.",
                              "The team members need not necessarily be from the same institution/college.",
                              "Participants can not be a member of more than a team",
                              "Teams involved in any kind of malpractice will be disqualified immediately",
                              "The decision of the judges will be final"
                              ],
                        contact:["Person Name - 9876543210",
                                  "Person Name - 9876543210",
                                  "Person Name - 9876543210"
                                ],
                        venueTime:["1. The event is the best event",
                                    "2. All participants need to be there",
                                    "3. Max four in a group only"]
                      } />
  props.name --> string [Actual Event Name]
  props.refName --> string [the name in which images are stores]
  props.about --> string
  props.rules --> array of strings
  props.contact --> array of strings
  props.venueTime --> array of strings

  Images need to save in the public/images/events/refName_rules.svg
                             public/images/events/refName_about.svg
                             public/images/events/refName_sponsor.svg    
*/

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

      let response = await apiGetRegistrations({ "token": token })
      for (let i = 0; i < response.length; i++) {
        // Check if registered
        if (response[i].purpose === "EVENTS") {
          setregistered(true)
          // Paid
          if (response[i].status === "Credit") {
            setpaid(true)
          }
          // Registered but not paid
          else if (response[i].status === "null") {
            setpaid(false)
          }
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
    _paymentConfirmation(history, setpaymentDetails, toggleModal)

  }

  // Register
  const register = () => {
    _register(history, setregistered);
  }

  return (
    <>

      {loading ? <Load /> :
        <>
          {/*About Event*/}
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
              </div>
            </div>
          </div>




          {/* Contact-Sponsor-Platform */}
          <div
            className={`${styles._homepage} ${styles.bg}`}
           
          >
            <div className={`${styles._about_event}`}>
              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Contact",
                  contact: props.contact
                }} />
              </div>

              <div className={`${styles._child} `}>
                <GlowCardResponsive props={{ title: props.sponsor, content: 'Sponsor', img: "events/" + `${props.refName}` + `_sponsor.svg` }} />
              </div>

              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Time & Platform",
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


          {/* Rounds */}
          <div
            className={`${styles._homepage} ${styles.bg}`}
            
          >
            <div className={`${styles._rulesDivContainer1}`}>
              <div className={`${styles._rulesDiv1}`}>
                <GlowCardSimple props={{
                  title: "Rounds",
                  rounds: props.rounds,
                }} />
              </div>
              {
                !registered ?
                  (<NeonButton props={{ text: "Register", onClick: register, color: "#26a0da" }} />)
                  :
                  (!paid ?
                    (<NeonButton props={{ text: "Pay", onClick: paymentConfirmation, color: "#26a0da" }} />)
                    :
                    <p style={{ color: "white" }}>Already Paid</p>)
              }


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
              <div>

              </div>
            </div>
          </div>
        </>
      }
    {/* <Footer /> */}
    </>
  );
}

export default EventTemplate;
