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

                <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
                    <GlowCardResponsive props={{ title: "CAM",titleFontFamily:"Iceland", content: "A challenge where the participants have to identify and resolve bugs",img:"events/cam.svg", href: "/events/non-tech/cam" }} />
                    <GlowCardResponsive props={{ title: "DESIGN",titleFontFamily:"Iceland", content: "Innovate and develop influential solutions to a problem using technology",img:"events/design.svg", href: "/events/non-tech/design" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default NonTechEvents
