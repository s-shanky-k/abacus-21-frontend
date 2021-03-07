import React, { Component } from 'react'
import styles from "./Workshops.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'
class Workshops extends Component {
    render() {
        return (
            <>

                <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
                    <GlowCardResponsive props={{ title: "Cloud Computing", titleFontFamily: "Iceland", content: "A cloud computing workshop", img: "workshops/cloud-computing.svg", href: "/workshops/cloud-computing" }} />
                    <GlowCardResponsive props={{ title: "Job Readiness", titleFontFamily: "Iceland", content: "A placement workshop", img: "workshops/job-readiness.svg", href: "/workshops/job-readiness" }} />
                    <GlowCardResponsive props={{ title: "Entrepreneurship", titleFontFamily: "Iceland", content: "An entrepreneurship workshop", img: "workshops/entrepreneurship.svg", href: "/workshops/entrepreneurship" }} />
                </div>


                <Footer />

            </>
        )
    }
}

export default Workshops
