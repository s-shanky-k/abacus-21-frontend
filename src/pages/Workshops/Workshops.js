import React, { Component } from 'react'
import styles from "./Workshops.module.css"
import ScrollUpButton from 'react-scroll-up-button'
import LoginRegister from "../LoginRegister/LoginRegister.js";
import Footer from '../../components/Footer/Footer'
class Workshops extends Component {
    render() {
        return (
            <>
            <div>
                <ScrollUpButton />
                //This is all you need to get the default view working
            </div>
        
           
                
                <LoginRegister></LoginRegister>

                {/* Child Class */}
                <div id="worshops" className={`${styles._homepage}`} style={{ backgroundColor: 'blue' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-WORKSHOPS!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-WORKSHOPS!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'pink' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-WORKSHOPS!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-WORKSHOPS!</div>
                </div>
             <Footer/>   
            </>
        )
    }
}

export default Workshops
