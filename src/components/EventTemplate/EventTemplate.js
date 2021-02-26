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
      <div
        id="sec1"
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>Lander</div>
      </div>


      {/* Child Class */}
      {/*About Event*/ }
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>
            <div className={styles.eventCard}>
                <div className={styles.eventContainer}>
                    <div className={styles.event_left_half}>
                        <GlowCardSimple props={{
                            title: "About Event",
                            content: "Hackathon is an event where the tech-savvy individuals collaborate intensively to innovate and develop influential solutions to a problem using technology. Being the signature event of Abacus, here the participants need to team up and brainstorm their ideas to create proto - type for a given theme. "
                        }} /> 
                    </div>
                    <div className={styles.event_right_half}>
                        <img src={mass} alt="" className={styles.eventCardImg}/>
                    </div>
                </div>
            
            </div> 
        </div>
      </div>

     

      {/* Child Class */}
      {/* Sponsors&Contact&Venue Design-1*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      > 
        <GlowCardSimple props={{
                            title: "Contact",
                            list:[{
                              id:1,
                              text: "1. The event is the best event"
                            },
                            {
                              id:2,
                              text: "2. All participants need to be there"
                            },
                            {
                              id:3,
                              text: "3. Max four in a group only"
                            }],
                        }} /> 
        <GlowCardResponsive props={{ title: "Sponsor"}} />
        <GlowCardSimple props={{
                            title: "Venue & Time",
                            list:[{
                              id:1,
                              text: "1. The event is the best event"
                            },
                            {
                              id:2,
                              text: "2. All participants need to be there"
                            },
                            {
                              id:3,
                              text: "3. Max four in a group only"
                            }],
                        }} /> 
      </div>


       {/* Child Class */}
      {/* Sponsors&Contact&Venue Design-2*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      > 
          <GlowCard props={{
                              title: "Contact",
                              list:[{
                                id:1,
                                text: "1. The event is the best event"
                              },
                              {
                                id:2,
                                text: "2. All participants need to be there"
                              },
                              {
                                id:3,
                                text: "3. Max four in a group only"
                              }],
                          }} /> 
          <GlowCardResponsive props={{title: "Sponsor"}} />
          <GlowCard props={{
                              title: "Venue & Time",
                              list:[{
                                id:1,
                                text: "1. The event is the best event"
                              },
                              {
                                id:2,
                                text: "2. All participants need to be there"
                              },
                              {
                                id:3,
                                text: "3. Max four in a group only"
                              }],
                          }} /> 
      </div>


      {/* Child Class */}
      {/* Rules Design - 1*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>
        <GlowCard props={{
                            title: "Rules",
                            list:[{
                              id:1,
                              text: "1. The event is the best event"
                            },
                            {
                              id:2,
                              text: "2. All participants need to be there"
                            },
                            {
                              id:3,
                              text: "3. Max four in a group only"
                            }],
                            img: "events/mass-Main.png"
                        }} /> 
            
            </div>
            <NeonButton props={{text:"Register", href:"/events", color:"#26a0da"}}/>
      </div>
    </>
  );
}

export default EventTemplate;
