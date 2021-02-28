import React, { Component, useRef } from 'react'
import styles from "./Homepage.module.css"
import {ScrollUpButton} from 'react-scroll-up-button'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import 'bootstrap/dist/css/bootstrap.min.css'

//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import GlowCard from '../../components/GlowCard/GlowCard'
import Loader from '../../components/Loader/Loader'
import Load from '../../components/Load/Load'
import Heading from '../../components/Heading/Heading'
import Heading1 from '../../components/Heading1/Heading1'
import Footer from '../../components/Footer/Footer'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';




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
          return <Load />; // render null when app is not ready
        }
        const { is_visible } = this.state;
        return (

            
            <>
        
                <Loader />
             
                {/* Child Class */}
              
                
                <section id="homepage">
                
                <div className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '060c21' }}>
                    
                   
                    <div className={`${styles._homepage_container}`}>

                        <Heading text="CSEA" fontSize="50px" />

                    </div>
                    <NeonButton props={{ text: "Boom Events", href: "/events", color: "#26a0da" }} />
      <div class="container-fluid  ml-sm-0 mt-5 pt-5 justify-content-center align-self-center">
          <div class="row justify-content-center align-self-center ">
              <div class="col col-lg-3 col-md-4 pb-5 mt-5 text-center">
         
                
             
                 
                <div className={`${styles.countup}`}   >  
            
                        <CountUp  start={0} end={5} redraw={true} suffix=" +" >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></div> <Heading1 text="Events" fontSize="20px" /></div>
            <div class="col mt-5  pb-5 col-lg-3 col-md-4 text-center">                   
                      
                                
                                <div className={`${styles.countup}`}  >          
                        <CountUp  start={0} end={3} redraw={true} suffix=" +">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> </div><Heading1 text="Workshops" fontSize="20px" /></div>
                                <div class="col col-lg-3 col-md-4 pb-5  mt-5 text-center ">                 
                                   
                                
                                <div className={`${styles.countup}`}  >          
                        <CountUp  start={0} end={1} redraw={true} suffix=" ">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></div><Heading1 text=" Mega Hackathon" fontSize="20px" /></div>
                                <div class="col col-lg-3 col-md-4  mt-5  pb-5 text-center">                     
                  
                                
                                
                                <div className={`${styles.countup}`}>        
                        <CountUp  start={0} end={8} redraw={true} suffix=" L+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> </div><Heading1 text="Prize Money" fontSize="20px" />
  </div> </div> </div>  </div>                    
                  
                                
  
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
                    
                   
                </div>
               
                
           
                <ErrorPage />
                <Footer /> 
            </>

        )
    }
}

export default Homepage
