import styles from "./WorkshopTemplate.module.css";
import React, { useState, useEffect } from "react";
import GlowCard from "../GlowCard/GlowCard";
import GlowCardSimple from "../GlowCardSimple/GlowCardSimple"
import GlowCardResponsive from "../GlowCardResponsive/GlowCardResponsive"
import NeonButton from "../NeonButton/NeonButton";
import Cookies from "js-cookie"
import { apiGetRegistrations, apiRegisterEvent, apiPayment } from "../../api/api"
import Load from "../Load/Load";
import Modal from "react-modal"
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import Footer from "../Footer/Footer"
import { _register, _paymentConfirmation } from "../../api/payment"
import Dev from "../Dev/Dev";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../Heading/Heading"
/* 
<WorkshopTemplate props = {name:"Tenet",
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
function WorkshopTemplate({ props }) {

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
        if (response[i].purpose === props.purpose) {
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
    setloading(true)
    _paymentConfirmation(history, setpaymentDetails, toggleModal, { "purpose": props.purpose }, setloading)

  }

  // Register
  const register = () => {
    _register(history, setregistered, { "purpose": props.purpose });
  }

  return (
    <>

      {loading ? <Load /> :
        <>
          {/*About Workshop*/}
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
                <img src={`${process.env.PUBLIC_URL}/images/workshops/` + `${props.refName}` + `.svg`} alt="" className={styles.eventCardImg} />

                {/* Button */}

                {props.registration &&
                  <div >
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
          {/* <div
            className={`${styles._homepage} ${styles.bg}`}

          >
            <div className={`${styles._about_event}`}>
              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Contact",
                  contact: props.contact
                }} />
              </div>
              
              {
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
              }
              

              <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Time & Platform",
                  list: props.dateTime
                }} />
              </div>
            </div>
          </div> */}

          {/* Speakers */}
          {/* <div
          className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}
        >
          <div className="text-center">
            <Heading text="Speakers" fontSize="40px" />
          </div>
          <div className="container-fluid m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
            <div className="row  d-flex justify-content-center align-self-center pb-5">
              {props.speakers.map((speaker, index) =>
              <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">
                <Dev
                props={{
                  title: speaker.name,
                  title1: speaker.profession,
                  img: `workshop/`+`${speaker.name}`+`.jpeg`
                }}
                />
              </div>
              )
              }
            </div>
          </div>
        </div> */}

          {/* Agenda */}
          {/* <div
            className={`${styles._homepage} ${styles.bg}`}

          >
          <div className={`${styles._rulesDivContainer1}`}>
              <div className={`${styles._rulesDiv1}`}>
                <GlowCardSimple props={{
                  title: "Agenda",
                  agenda: props.agenda,
                }} />
              </div>
            </div>
          </div> */}

          {/*Prereq*/}
          {/* <div
            className={`${styles._homepage} ${styles.bg1}`}

          >
    
            <div className={`${styles._child}`}>
                <GlowCardSimple props={{
                  title: "Prerequisites",
                  list: props.prerequisite
                }} />
              </div>
            </div> */}



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

export default WorkshopTemplate;
