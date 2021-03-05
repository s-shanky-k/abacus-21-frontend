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
                    <GlowCardResponsive props={{ title: "IMAGENATION",titleFontFamily:"Iceland", content: "An online photography contest",img:"events/imagenation.svg", href: "/events/non-tech/imagenation" }} />
                    <GlowCardResponsive props={{ title: "GRAPHIC TRAFFIC",titleFontFamily:"Iceland", content: "An online poster designing contest",img:"events/graphic-traffic.svg", href: "/events/non-tech/graphic-traffic" }} />
                    <GlowCardResponsive props={{ title: "HOUSE FULL",titleFontFamily:"Iceland", content: "An event for all the non-technical pros out there",img:"events/housefull.svg", href: "/events/non-tech/housefull" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default NonTechEvents
