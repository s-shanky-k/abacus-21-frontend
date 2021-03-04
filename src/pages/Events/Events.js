import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'
class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        
    }
    
    render() {
        const {width} = this.props
        return (
            <>
                <div id="sec1" className={`${styles._homepage} ${styles._responsive} ${styles.bg}`} >
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily:"Iceland",href: "events/tech", img:"events/tech.svg" }} />
                    <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily:"Iceland",href: "/hackathon", img:"events/hackathon.svg"}} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily:"Iceland",href: "events/non-tech", img:"events/nontech.svg"}} />
                </div>
                <Footer/>
            </>
        )
    }
}

export default Events
