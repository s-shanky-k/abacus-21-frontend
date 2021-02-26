import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'

class TechEvents extends Component {
    render() {
        return (
            <>

                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "TENET", content: "A challenge where the participants have to identify and resolve bugs", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "Hackathon",titleFontFamily:"Iceland", content: "Innovate and develop influential solutions to a problem using technology", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "NOVICE.INIT()", titleFontFamily:"Iceland", content: "Exclusive event for the first year students ", href: "/events" }} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "X-Domain Combat",titleFontFamily:"Iceland", content: "Explore new horizons in various technical domains", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "CODE FOR CROWN",titleFontFamily:"Iceland", content: "Online Programming Contest ", href: "/events" }} />
                </div>
            </>
        )
    }
}

export default TechEvents
