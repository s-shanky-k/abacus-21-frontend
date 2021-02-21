import React, { Component } from 'react'
import styles from "./AboutUs.module.css"
import Heading from '../../components/Heading/Heading'
import GlowCard from '../../components/GlowCard/GlowCard'

class AboutUs extends Component {
    render() {
        return (
            <>
                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCard props={{ title: "CSEA", content: "The Computer Science and Engineering Association, CEG is a team of students and faculty members. We perform multiple activities throughout the year, the most notable ones being SYNC (intra college symposium), periodic coding contests to encourage students to code more and weekly classes for juniors for subjects they find difficult, placement assistance and competitive coding. CSEA is a forum of dedicated members who want to inculcate interest and good programming practices amongst the students." }} />
                    {/* <div className={`${styles._homepage_container}`}>
                        <Heading text="csea" fontSize="60px" />
                    </div> */}
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-ABOUT-US!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'pink' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-ABOUT-US!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-ABOUT-US!</div>
                </div>
            </>
        )
    }
}

export default AboutUs
