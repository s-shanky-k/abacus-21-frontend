import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'

class NonTechEvents extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const { width } = this.props
        return (
            <>

                <div id="sec1" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
                    <GlowCardResponsive props={{ title: "IMAGENATION", titleFontFamily: "Iceland", content: "A challenge where the participants have to identify and resolve bugs", img: "events/cam.svg", href: "/events/non-tech/imagenation" }} />
                    <GlowCardResponsive props={{ title: "GRAPHIC TRAFFIC", titleFontFamily: "Iceland", content: "Innovate and develop influential solutions to a problem using technology", img: "events/design.svg", href: "/events/non-tech/graphic-traffic" }} />
                    <GlowCardResponsive props={{ title: "HOUSE FULL", titleFontFamily: "Iceland", content: "Innovate and develop influential solutions to a problem using technology", img: "events/design.svg", href: "/events/non-tech/house-full" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default NonTechEvents
