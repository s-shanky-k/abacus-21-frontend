import React, { Component, useContext } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { NewLoad, SetNewLoad } from "../../App"

class Events extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        // this._NewLoad = React.useContext(NewLoad)
        // this._SetNewLoad = React.useContext(SetNewLoad)
    }

    componentDidMount() {
        // if (this._NewLoad) {
        //     toast.warn("Single Payment for both Tech and Non-Tech events", {
        //         position: toast.POSITION.BOTTOM_CENTER
        //     })
        //     this._SetNewLoad(false)
        // }
    }

    render() {
        return (
            <>
                <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg}`} >
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily: "Iceland", href: "events/tech", img: "events/tech.svg" }} />
                    <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily: "Iceland", href: "/hackathon", img: "events/hackathon.svg" }} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily: "Iceland", href: "events/non-tech##", img: "events/nontech.svg" }} />
                </div>
                <Footer />
            </>
        )
    }
}

export default Events
