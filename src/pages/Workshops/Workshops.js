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

                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Cloud", titleFontFamily:"Iceland",content: "A challenge where the participants have to identify and resolve bugs", img:"workshops/cloud.svg", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "Security", titleFontFamily:"Iceland", content: "Exclusive event for the first year students ",img:"workshops/security.svg", href: "/events" }} />
                </div>

            </>
        )
    }
}

export default Workshops
