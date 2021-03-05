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

                <div id="sec1" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
                    <GlowCardResponsive props={{ title: "CLOUD COMPUTING", titleFontFamily: "Iceland", content: "A challenge where the participants have to identify and resolve bugs", img: "workshops/cloud.svg", href: "/workshops/cloud-computing" }} />
                    <GlowCardResponsive props={{ title: "CYBER SECURITY", titleFontFamily: "Iceland", content: "Exclusive event for the first year students ", img: "workshops/security.svg", href: "/workshops/cyber-security" }} />
                    <GlowCardResponsive props={{ title: "JOB READINESS", titleFontFamily: "Iceland", content: "A challenge where the participants have to identify and resolve bugs", img: "workshops/cloud.svg", href: "/workshops/job-readiness" }} />
                </div>


                <Footer />

            </>
        )
    }
}

export default Workshops
