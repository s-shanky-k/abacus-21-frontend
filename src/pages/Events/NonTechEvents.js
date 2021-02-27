import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'

class NonTechEvents extends Component {
    render() {
        return (
            <>

                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Cam", content: "A challenge where the participants have to identify and resolve bugs",img:"events/cam.svg", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "Design", content: "Innovate and develop influential solutions to a problem using technology",img:"events/design.svg", href: "/events" }} />
                </div>
            </>
        )
    }
}

export default NonTechEvents
