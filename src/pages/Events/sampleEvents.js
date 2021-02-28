import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import * as EventTypes from './Event-Types/';

class sampleEvents extends Component {
    state = {
        selectedEventType : ''
    };
    render() {
        console.log("Boom",this.state.selectedEventType);
        return (
            <>
                {this.renderEventTypeSelector()}
                {this.renderSelectedEventType(this.state.selectedEventType)}
                {/* <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland",href: "/tech-events", img:"events/tech.svg" }} />
                    <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily:"Iceland",href: "/hackathon", img:"events/hackathon.svg"}} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily:"Iceland",href: "/non-tech-events", img:"events/nontech.svg"}} />
                </div> */}
            </>
        )
    }

    renderEventTypeSelector() {
        return(
            <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                <div onClick = {(e) => {this.setState({ selectedEventType : "TechEvents"})}}>
                <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland", img:"events/tech.svg" }} />
                </div>
                <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily:"Iceland",href: "/hackathon", img:"events/hackathon.svg"}} />
                <div onClick = {(e) => {this.setState({ selectedEventType : "NonTechEvents"})}}>
                <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily:"Iceland", img:"events/nontech.svg"}} />
                </div>
            </div>
        )
    }

    renderSelectedEventType(selectedEventType) {
        if(!selectedEventType){
            return (
                <>
                </>
            )
        }
        const EventType = EventTypes[selectedEventType];
        return <EventType />
    }
}

export default sampleEvents
