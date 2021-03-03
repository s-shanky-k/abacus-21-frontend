import React, { Component, useRef } from 'react'
import styles from "./Homepage.module.css"
import { ScrollUpButton } from 'react-scroll-up-button'
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
import Dev from '../../components/Dev/Dev';
import GlowCircle from '../../components/GlowCircle/GlowCircle';
import { toast } from "react-toastify"



function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}



class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            queryParams: {}
        }
    }

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
        let queryString = require('query-string')
        let params = queryString.parse(this.props.location.search)
        if (!(Object.keys(params).length === 0)) {
            toast.success(params.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
    }

    render() {

        const { loading } = this.state;
        if (loading) { // if your component doesn't have to wait for an async action, remove this block 
            return <Load />; // render null when app is not ready
        }
        const { is_visible } = this.state;
        return (


            <>

                <Loader />

                {/* Child Class */}


                <section id="homepage">

                    <div className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '060c21' }}>
                        <div class="container-fluid m-auto ml-md-5 pl-5 mb-5 pb-5 justify-content-lg-center  align-self-center">
                            <div class="row justify-content-center align-self-center align-items-center">
                                <div class="col pr-5  col-lg-3 pb-5 justify-content-center">
                                    <GlowCircle props={{ img: "about-us/abacus.svg" }} /> </div>
                                <div class="col pr-5 col-lg-3 pb-5 col-md-4 col-sm-6">
                                    <GlowCircle props={{ img: "about-us/abacus.svg" }} /> </div>
                                <div class="col pr-5 col-lg-3 pb-5 col-md-4 col-sm-6">
                                    <GlowCircle props={{ img: "about-us/abacus.svg" }} /> </div>  </div></div>
                        <div class="container-fluid  ml-sm-0  justify-content-center align-self-center">
                            <div class="row justify-content-center align-self-center ">
                                <div class="col col-lg-3 col-md-4 pb-5 mt-5 text-center">




                                    <div className={`${styles.countup}`}   >

                                        <CountUp start={0} end={5} redraw={true} suffix=" +" >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp></div> <Heading1 text="Events" fontSize="20px" /></div>
                                <div class="col mt-5  pb-5 col-lg-3 col-md-4 text-center">


                                    <div className={`${styles.countup}`}  >
                                        <CountUp start={0} end={3} redraw={true} suffix=" +">
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp> </div><Heading1 text="Workshops" fontSize="20px" /></div>
                                <div class="col col-lg-3 col-md-4 pb-5  mt-5 text-center ">


                                    <div className={`${styles.countup}`}  >
                                        <CountUp start={0} end={1} redraw={true} suffix=" ">
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp></div><Heading1 text=" Mega Hackathon" fontSize="20px" /></div>
                                <div class="col col-lg-3 col-md-4  mt-5  pb-5 text-center">



                                    <div className={`${styles.countup}`}>
                                        <CountUp start={0} end={8} redraw={true} suffix=" L+">
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp> </div><Heading1 text="Prize Money" fontSize="20px" />
                                </div> </div> </div>  </div>



                </section>
                {/* Child Class */}
                <div className={`${styles._homepage} ${styles.bg}`} >

                    <iframe width="900" height="400" display="flex" flex="wrap" src="https://www.youtube.com/embed/aQ8rsGYszOE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles.bg1} ${styles._responsive}`}>
                    <div className={`${styles._homepage_container}`}>
                        SPONSERS

                    </div>
                    {/* <GlowCard props={{ title: "Boom", content: "This is Everything", degree: "180deg"}} /> */}

                </div>

                {/* Child Class */}
                <div className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}>
                    <Heading text='Developers and Design Team' fontSize='40px' />
                    <div class="container-fluid m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
                        <div class="row  d-flex justify-content-center align-self-center pb-5">
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">

                                <Dev props={{
                                    title: "Shankar Kumar", title1: "Frontend", img: "dev/darrshana.jpeg",
                                    href: "https://www.linkedin.com/in/darrshana-rajkumar-6a36aa1ba"
                                }} />

                            </div>


                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12  pb-5 ">
                                <Dev props={{
                                    title: "Darrshana", title1: "Frontend", img: "dev/darrshana.jpeg",
                                    href: "https://www.linkedin.com/in/darrshana-rajkumar-6a36aa1ba"
                                }} />
                            </div>


                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12  pb-5 ">
                                <Dev props={{ title: "Paargav Shanker", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">
                                <Dev props={{ title: "Umar Ahmed", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">
                                <Dev props={{ title: "Shankar Kumar", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5  ">
                                <Dev props={{ title: "Shankar Kumar", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">
                                <Dev props={{ title: "Shankar Kumar", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                            <div class="col col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-5 ">
                                <Dev props={{ title: "Shankar Kumar", title1: "Frontend", img: "dev/darrshana.jpeg" }} />
                            </div>
                        </div>

                    </div></div>


                <Footer />
            </>

        )
    }
}

export default Homepage
