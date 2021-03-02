import styles from "./EventTemplate.module.css";
import React from "react";
import GlowCard from "../GlowCard/GlowCard";
import GlowCardSimple from "../GlowCardSimple/GlowCardSimple"
import GlowCardResponsive from "../GlowCardResponsive/GlowCardResponsive"
import NeonButton from "../NeonButton/NeonButton";
import 'bootstrap/dist/css/bootstrap.min.css';

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

function EventTemplate({ props }) {
  console.log(props, "RAMPUUUUUUUUUUU")
  return (
    <>
      {/* Child Class */}
      {/* <div
        id="sec1"
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>Lander</div>
      </div> */}


      {/*About Event*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      ><div class="pt-5">
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
      </div></div>




      {/* Contact-Sponsor-Platform */}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._about_event}`}>
          <div className={`${styles._child}`}>
            <GlowCardSimple props={{
              title: "Contact",
              contact: props.contact
            }} />
          </div>

          <div className={`${styles._child}`}>
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
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._rulesDivContainer}`}>
          <div className={`${styles._rulesDiv}`}>
            <GlowCard props={{
              title: "Rules",
              list: props.rules,
              img: "events/" + `${props.refName}` + `_rules.svg`,
              textAlign:'left'
            }} />
          </div>
          {/* <div>
            <NeonButton props={{ text: "Register", href: "/register", color: "#26a0da" }} />
          </div> */}
        </div>
      </div>


      {/* Rounds */}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._rulesDivContainer}`}>
          <div className={`${styles._rulesDiv}`}>
            <GlowCardSimple props={{
              title: "Rounds",
              rounds: props.rounds,
            }} />
          </div>
          <div class="pt-3">
            <NeonButton props={{ text: "Register", href: "/register", color: "#26a0da" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EventTemplate;
