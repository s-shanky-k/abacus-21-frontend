import React, { Component } from 'react'
import styles from "./AboutUs.module.css"
import Heading from '../../components/Heading/Heading'
import GlowCard from '../../components/GlowCard/GlowCard'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import ScrollToTop from 'react-scroll-up'
import Footer from '../../components/Footer/Footer'

class AboutUs extends Component {


    render() {
        return (
            <>


                {/* Child Class */}
                <div ref={this.myRef} id="aboutus" className={`${styles._homepage} ${styles.bg1}`} >

                    <GlowCard props={{
                        title: "ABACUS",
                        content: "ABACUS is the annual intercollege symposium of the Department of Computer Science and Engineering conducted by Computer Science and Engineering Association (CSEA), College of Engineering Guindy. It is an event where people from multiple colleges demonstrate their technical prowess to win exciting prizes and internships.",
                        img: "about-us/abacus.svg",
                        degree: "25deg"
                    }} />

                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles.bg}`} >
                    <GlowCard props={{
                        
                        title: "CSEA",
                        content: "The Computer Science and Engineering Association, CEG is a team of students and faculty members. We perform multiple activities throughout the year, the most notable ones being SYNC (intra college symposium), periodic coding contests to encourage students to code more and weekly classes for juniors for subjects they find difficult, placement assistance and competitive coding. CSEA is a forum of dedicated members who want to inculcate interest and good programming practices amongst the students.",
                        img: "about-us/csea_white.png",
                        degree: "25deg"
                    }} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles.bg1}`}>
                    <GlowCard props={{
                        title: "CEG",
                        content: "Located at the Heart of Chennai, is our very own College of Engineering Guindy, a dream and desire that students all across Tamil Nadu aspire to touch. Founded in 1794, CEG holds laurels of being amongst the top ten institutions in the country, with a rich history spanning over 225 years. Living up to its motto of 'PROGRESS THROUGH KNOWLEDGE', it has been at the fore with it’s cutting-edge research, technology and innovation in shaping the world. True to its esteem, even today CEG stands as a beacon of light to students who wish to make a change in the world.",
                        img: "about-us/ceg_white.png",
                        degree: "25deg"
                    }} />
                </div>
                <Footer />
            </>
        )
    }
}

export default AboutUs
