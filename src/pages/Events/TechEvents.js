import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'

class TechEvents extends Component {
    render() {
        return (
            <>

                <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}>
                    <GlowCardResponsive props={{ title: "TENET", titleFontFamily: "Iceland", content: "A challenge where the participants have to identify and resolve bugs", img: "events/tenet.svg", href: "/events/tech/tenet" }} />
                    <GlowCardResponsive props={{ title: "CODE FOR CROWN", titleFontFamily: "Iceland", titleFontFamily: "Iceland", content: "Online Programming Contest ", img: "events/code-for-crown.svg", href: "/events/tech/code-for-crown-olpc" }} />
                </div>

                <div className={`${styles._homepage} ${styles._responsive}  ${styles.bg}`}>
                    <GlowCardResponsive props={{ title: "X-Domain Combat", titleFontFamily: "Iceland", titleFontFamily: "Iceland", content: "Explore new horizons in various technical domains", img: "events/x-domain-combat.svg", href: "/events/tech/x-domain-combat" }} />
                    <GlowCardResponsive props={{ title: "NOVICE.INIT()", titleFontFamily: "Iceland", content: "Exclusive event for the first year students ", img: "events/novice.svg", href: "/events/tech/novice-init" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default TechEvents
