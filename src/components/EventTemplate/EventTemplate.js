import styles from "./EventTemplate.module.css";
import NumberCounterCard from '../NumberCounter/NumberCounter'
import Heading from "../Heading/Heading"
import React from "react";
import GlowCard from "../GlowCard/GlowCard";
import GlowCardSimple from "../GlowCardSimple/GlowCardSimple"
import GlowCardResponsive from "../GlowCardResponsive/GlowCardResponsive"
import mass from './mass-Main.png'
import NeonButton from "../NeonButton/NeonButton";

function EventTemplate() {
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


      {/* Child Class */}
      {/*About Event*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._about_event}`}>
          <div className={`${styles._glowCardDiv}`}>
            <GlowCardSimple props={{
              title: "About Event",
              // content: "Hackathon is an event where the tech-savvy individuals collaborate intensively to innovate and develop influential solutions to a problem using technology. Being the signature event of Abacus, here the participants need to team up and brainstorm their ideas to create proto - type for a given theme. "
              content: "X - Domain Combat is an event that measures the expertise of the participants who are experts in multiple domains like Database Management Systems, Security, Operating Systems, Computer Networks and so on. This event also provides opportunity for the participants to explore new horizons in various technical domains."
            }} />
          </div>

          <div className={`${styles._eventCardImgDiv}`}>
            <img src={mass} alt="" className={styles.eventCardImg} />
          </div>
        </div>
      </div>



      {/* Child Class */}
      {/* Sponsors&Contact&Venue Design-1*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._about_event}`}>
          <div className={`${styles._child}`}>
            <GlowCardSimple props={{
              title: "Contact",
              list: [{
                id: 1,
                text: "Person Name - 9876543210"
              },
              {
                id: 2,
                text: "Person Name - 9876543210"
              },
              {
                id: 3,
                text: "Person Name - 9876543210"
              }],
            }} />
          </div>

          <div className={`${styles._child}`}>
            <GlowCardResponsive props={{ title: "Sponsor" }} />
          </div>

          <div className={`${styles._child}`}>
            <GlowCardSimple props={{
              title: "Venue & Time",
              list: [{
                id: 1,
                text: "1. The event is the best event"
              },
              {
                id: 2,
                text: "2. All participants need to be there"
              },
              {
                id: 3,
                text: "3. Max four in a group only"
              }],
            }} />
          </div>




        </div>
      </div>


      {/* Child Class */}
      {/* Sponsors&Contact&Venue Design-2*/}
      {/* <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._about_event}`}>
          <div className={`${styles._child}`}>
            <GlowCard props={{
              title: "Contact",
              list: [{
                id: 1,
                text: "1. The event is the best event"
              },
              {
                id: 2,
                text: "2. All participants need to be there"
              },
              {
                id: 3,
                text: "3. Max four in a group only"
              }],
            }} />
          </div>

          <div className={`${styles._child}`}>
            <GlowCardResponsive props={{ title: "Sponsor" }} />
          </div>

          <div className={`${styles._child}`}>
            <GlowCard props={{
              title: "Venue & Time",
              list: [{
                id: 1,
                text: "1. The event is the best event"
              },
              {
                id: 2,
                text: "2. All participants need to be there"
              },
              {
                id: 3,
                text: "3. Max four in a group only"
              }],
            }} />
          </div>

        </div>

      </div> */}


      {/* Child Class */}
      {/* Rules Design - 1*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._rulesDivContainer}`}>
          <div className={`${styles._rulesDiv}`}>
            <GlowCard props={{
              title: "Rules",
              list: [{
                id: 1,
                text: "A domain will be given on the day of hackathon"
              },
              {
                id: 2,
                text: "The teams should develop a software in the same domain."
              },
              {
                id: 3,
                text: "A team must consist of 2 members."
              },
              {
                id: 4,
                text: "The team members need not necessarily be from the same institution/college."
              },
              {
                id: 5,
                text: "Participants can not be a member of more than a team"
              },
              {
                id: 6,
                text: "Teams involved in any kind of malpractice will be disqualified immediately"
              },
              {
                id: 7,
                text: "The decision of the judges will be final"
              },],
              img: "events/mass-Main.png"
            }} />
          </div>

          <div>
            <NeonButton props={{ text: "Register", href: "/events", color: "#26a0da" }} />
          </div>

        </div>
      </div>
    </>
  );
}

export default EventTemplate;
