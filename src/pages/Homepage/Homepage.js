import React, { Component, useRef } from 'react'
import styles from "./Homepage.module.css"
import {ScrollUpButton} from 'react-scroll-up-button'
//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import GlowCard from '../../components/GlowCard/GlowCard'
import Loader from '../../components/Loader/Loader'
import Load from '../../components/Load/Load'
import Heading from '../../components/Heading/Heading'


function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }


class Homepage extends Component {

    state = {
        loading: true
      };
    
      componentDidMount() {
  
        demoAsyncCall().then(() => this.setState({ loading: false }));
      }
      
 render() {

        const { loading } = this.state;
    
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
          return <Load/>; // render null when app is not ready
        }
        return (
            
            <>
        
                <Loader />
              
                {/* Child Class */}
              
                <section id="homepage">
                
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    
                   
                    <div className={`${styles._homepage_container}`} >

                        <Heading text="CSEA" fontSize="50px" />

                    </div>
                    <NeonButton props={{ text: "Boom Events", href: "/events", color: "#26a0da" }} />
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

export default Homepage
