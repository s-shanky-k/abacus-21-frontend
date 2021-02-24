import React, { Component } from 'react'
import styles from "./Homepage.module.css"


//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import GlowCard from '../../components/GlowCard/GlowCard'
import Loader from '../../components/Loader/Loader'
import Heading from '../../components/Heading/Heading'


class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Loader />
                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'blue' }}>
                    <div className={`${styles._homepage_container}`}>
                        <Heading text="CSEA" fontSize="50px" />
                    </div>
                    <NeonButton props={{ text: "Boom Events", href: "/events", color: "#26a0da" }} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    {/* <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div> */}
                    <GlowCardResponsive props={{ title: "Boom", content: "This is Everything", href: "/events" ,img:"about-us/ceg_white.png"}} />
                    {/* <NeonButton props={{ text: "Boom Events", href: "/events", color: "#26a0da" }} /> */}
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: '#060c21' }}>
                    {/* <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div> */}
                    {/* <GlowCard props={{ title: "Boom", content: "This is Everything", degree: "180deg"}} /> */}
                    <GlowCardResponsive props={{ title: "Boom", content: "This is Everything", href: "/events" }} />
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!</div>
                </div>
            </>

        )
    }
}

export default Homepage
