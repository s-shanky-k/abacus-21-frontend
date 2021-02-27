import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import img from "./Asset 5patt.svg"
class Events extends Component {
    render() {
        return (
            <>
                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland",href: "events/tech", img:"events/tech.svg" }} />
                    <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily:"Iceland",href: "/hackathon", img:"events/hackathon.svg"}} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily:"Iceland",href: "events/non-tech", img:"events/nontech.svg"}} />
                </div>
            </>
        )
    }
}

export default Events
