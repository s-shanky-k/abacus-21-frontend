import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'

class Events extends Component {
    render() {
        return (
            <>
                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland",href: "/tech-events" }} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", href: "/non-tech-events" }} />
                </div>
            </>
        )
    }
}

export default Events
