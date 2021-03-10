import React, { Component, useEffect, useState } from 'react'
import styles from "./Workshops.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'
import { toast } from "react-toastify"
import { NewLoadWorkshop, SetNewLoadWorkshop } from "../../App";

// class Workshops extends Component {
//     render() {
//         return (
//             <>

//                 <div id="#" className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`} >
//                     <GlowCardResponsive props={{ title: "Cloud Computing", titleFontFamily: "Iceland", content: "A cloud computing workshop", img: "workshops/cloud-computing.svg", href: "/workshops/cloud-computing" }} />
//                     <GlowCardResponsive props={{ title: "Job Readiness", titleFontFamily: "Iceland", content: "A placement workshop", img: "workshops/job-readiness.svg", href: "/workshops/job-readiness" }} />
//                     <GlowCardResponsive props={{ title: "Entrepreneurship", titleFontFamily: "Iceland", content: "An entrepreneurship workshop", img: "workshops/entrepreneurship.svg", href: "/workshops/entrepreneurship" }} />
//                 </div>


//                 <Footer />

//             </>
//         )
//     }
// }

toast.configure()
export default function Workshops() {

    const _NewLoadWorkshop = React.useContext(NewLoadWorkshop)
    const _SetNewLoadWorkshop = React.useContext(SetNewLoadWorkshop)

    const [toastDisplay, setToastDisplay] = useState(true)

    const customStyle = {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        width: 400,
    }

    useEffect(() => {
        if (_NewLoadWorkshop) {
            toast.info("Online certificates will be provided for all Workshops", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 8000,
                closeButton: false,
                style: customStyle,
            })
            _SetNewLoadWorkshop(false)
        }
        return () => {

        }
    }, [])


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


// export default Workshops
