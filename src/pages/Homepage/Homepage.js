import React, { Component, useRef, useState, useEffect } from 'react'
import styles from "./Homepage.module.css"
import {ScrollUpButton} from 'react-scroll-up-button'
//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import GlowCard from '../../components/GlowCard/GlowCard'
import Loader from '../../components/Loader/Loader'
import Load from '../../components/Load/Load'
import Heading from '../../components/Heading/Heading'
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar'
import {useHistory} from "react-router-dom"
import {useLocation} from 'react-router-dom'


function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default function Homepage(props) {

    const [loading, setloading] = useState(true);
    const history = useHistory()
    const location = useLocation()
    const CustomSnackBarRef = useRef();

    useEffect(() => {
        demoAsyncCall().then(() => setloading(false));
        console.log(props.location.state);
        if(props.location.state && location.state.hasOwnProperty("snackbar_message")){
            console.log("LOG");
            CustomSnackBarRef.current.handleClick(location.state.snackbar_message);
        }
        return () => {
        }
      }, [])

    if(loading){
        return(
            <div>
                <Load />
            </div>
        )
    }
    else{
        return(
            <>
        
                <Loader />
              
                {/* Child Class */}
              
                <section id="homepage">
                
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'blue' }}>
                    
                   
                    <div className={`${styles._homepage_container}`}>

                        <Heading text="CSEA" fontSize="50px" />

                    </div>

                    {/* <NeonButton props={{ text: "Boom Events", color: "#26a0da", onClick: eventRedirect}} /> */}
                    {/* <NeonButton props={{ text: "Boom Events", color: "#26a0da", onClick: () => CustomSnackBarRef.current.handleClick()}} /> */}
                    <NeonButton props={{ text: "Boom Events", color: "#26a0da" }} />


                    <CustomSnackBar ref={CustomSnackBarRef}></CustomSnackBar>



                </div>
                </section>
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
