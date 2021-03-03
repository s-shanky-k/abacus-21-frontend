import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'

class TechEvents extends Component {
    render() {
        return (
            <>

                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "TENET", titleFontFamily:"Iceland",content: "A challenge where the participants have to identify and resolve bugs", img:"events/tenet.svg", href: "/events/tech/tenet" }} />
                    <GlowCardResponsive props={{ title: "NOVICE.INIT()", titleFontFamily:"Iceland", content: "Exclusive event for the first year students ",img:"events/novice.svg", href: "/events/tech/novice" }} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "X-Domain Combat",titleFontFamily:"Iceland",titleFontFamily:"Iceland", content: "Explore new horizons in various technical domains",img:"events/xcombat.svg", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "CODE FOR CROWN",titleFontFamily:"Iceland",titleFontFamily:"Iceland", content: "Online Programming Contest ",img:"events/crown.svg", href: "/events" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default TechEvents
