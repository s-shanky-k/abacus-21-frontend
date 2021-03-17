import React, { Component, useContext, useState, useEffect } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { NewLoad, SetNewLoad } from "../../App"
import {Width} from "../../App"

// class Events extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             toastDisplay: true,
//         }

//         // this._NewLoad = React.useContext(NewLoad)
//         // this._SetNewLoad = React.useContext(SetNewLoad)
//     }

//     componentDidMount() {
//         // if (this._NewLoad) {
//         //     toast.warn("Single Payment for both Tech and Non-Tech events", {
//         //         position: toast.POSITION.BOTTOM_CENTER
//         //     })
//         //     this._SetNewLoad(false)
//         // }

//         if(this.state.toastDisplay) {
//             toast.info("Single Payment for both Tech and Non-Tech Events", {
//                 position: toast.POSITION.BOTTOM_LEFT,
//                 autoClose: 8000,
//                 closeButton: false,
//                 style: customStyle,
//             })
//             this.state.toastDisplay = false;
//         }
//     }

//     render() {
//         return (
//             <>
//                 <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg}`} >
//                     <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily: "Iceland", href: "events/tech", img: "events/tech.svg" }} />
//                     <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily: "Iceland", href: "/hackathon", img: "events/hackathon.svg" }} />
//                     <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily: "Iceland", href: "events/non-tech##", img: "events/nontech.svg" }} />
//                 </div>
//                 <Footer />
//             </>
//         )
//     }
// }

// import React from 'react'

toast.configure()
export default function Events() {

    const [toastDisplay, setToastDisplay] = useState(true)
    const _SetNewLoad = React.useContext(SetNewLoad)
    const _NewLoad = React.useContext(NewLoad)

    const customStyle = {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: 400,
    }

    useEffect(() => {
        if(_NewLoad) {
            toast.info("Single Payment for both Tech and Non-Tech Events", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 8000,
                closeButton: false,
                style: customStyle,
            })
            _SetNewLoad(false)
        }
        return () => {
            
        }
    }, [])

    return (
        <>
                <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg}`} >
                    <GlowCardResponsive props={{ title: "Tech Events", titleFontFamily: "Iceland", href: "events/tech", img: "events/tech.svg" }} />
                    <GlowCardResponsive props={{ title: "Hackathon", titleFontFamily: "Iceland", href: "/hackathon", img: "events/hackathon.svg" }} />
                    <GlowCardResponsive props={{ title: "Non-Tech Events", titleFontFamily: "Iceland", href: "events/non-tech", img: "events/nontech.svg" }} />
                </div>
                <Footer />
        </>
    )
}


// export default Events
