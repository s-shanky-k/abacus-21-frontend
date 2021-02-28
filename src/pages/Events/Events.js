import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import img from "./img/Asset 5patt.svg"
import Footer from '../../components/Footer/Footer'
class Events extends Component {
    render() {
        return (
            <>
                <div id="sec1" className={`${styles._homepage} ${styles._responsive} ${styles.bg} `}  >
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland",href: "/tech-events" }} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", href: "/non-tech-events" }} />
                </div>
                <Footer/>
            </>
        )
    }
}

export default Events
