import styles from "./EventTemplate.module.css";
import NumberCounterCard from '../../components/NumberCounter/NumberCounter'
import Heading from "../../components/Heading/Heading"
import React from "react";
import GlowCard from "../../components/GlowCard/GlowCard";
import GlowCardResponsive from "../../components/GlowCardResponsive/GlowCardResponsive"
import mass from './mass-Main.png'
import NeonButton from "../../components/NeonButton/NeonButton";

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
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>
            <div className={styles.eventCard}>
                <div className={styles.eventContainer}>
                    <div className={styles.event_left_half}>
                        <GlowCard props={{
                            title: "About Event",
                            content: "Hackathon is an event where the tech-savvy individuals collaborate intensively to innovate and develop influential solutions to a problem using technology. Being the signature event of Abacus, here the participants need to team up and brainstorm their ideas to create proto - type for a given theme. ",
                            degree: "25deg"
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
      {/* Sponsors&Contact&Venue */}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      > 
        <GlowCard props={{
                            title: "Contact",
                            content: '1.dfjkdjnfkndsk \n 2. aiodsifnaiai \n 3.dkajfkodanfona',
                            degree: "25deg"
                        }} /> 
        <GlowCardResponsive props={{ title: "Sponsor"}} />
        <GlowCard props={{
                            title: "Venue & Time",
                            content: '1.dfjkdjnfkndsk \n 2. aiodsifnaiai \n 3.dkajfkodanfona',
                            degree: "25deg"
                        }} /> 
      </div>


       {/* Child Class */}
      {/* Rules*/}
      <div
        className={`${styles._homepage}`}
        style={{ backgroundColor: "#060c21" }}
      >
        <div className={`${styles._homepage_container}`}>
        <GlowCard props={{
                            title: "Rules",
                            content: '1.dfjkdjnfkndsk \n 2. aiodsifnaiai  \n 3.dkajfkodanfona',
                            img: "events/mass-Main.png",
                            degree: "25deg"
                        }} /> 
            
            </div>
            <NeonButton props={{text:"Register", href:"/events", color:"#26a0da"}}/>
      </div>
    </>
  );
}

export default EventTemplate;
