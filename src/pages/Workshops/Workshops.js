import React, { Component } from 'react'
import styles from "./Workshops.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import ScrollUpButton from 'react-scroll-up-button'
import LoginRegister from "../LoginRegister/LoginRegister.js";
import Footer from '../../components/Footer/Footer'
class Workshops extends Component {
    render() {
        return (
            <>

                <div id="workshops" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
                    <GlowCardResponsive props={{ title: "CLOUD", titleFontFamily: "Iceland", content: "A challenge where the participants have to identify and resolve bugs", img: "workshops/cloud.svg", href: "/workshops/cloud" }} />
                    <GlowCardResponsive props={{ title: "SECURITY", titleFontFamily: "Iceland", content: "Exclusive event for the first year students ", img: "workshops/security.svg", href: "/workshops/security" }} />
                </div>

                <Footer />

            </>
        )
    }
}

export default Workshops
