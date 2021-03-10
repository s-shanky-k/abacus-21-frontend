import React, { Component, useRef } from "react";
import styles from "./Homepage.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "bootstrap/dist/css/bootstrap.min.css";

//NeonButton
import GlowCard from "../../components/GlowCard/GlowCard";
import Loader from "../../components/Loader/Loader";
import Load from "../../components/Load/Load";
import Heading from "../../components/Heading/Heading";
import Heading1 from "../../components/Heading1/Heading1";
import Footer from "../../components/Footer/Footer";
import Dev from "../../components/Dev/Dev";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { Autocomplete } from "@material-ui/lab";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import GlowCardSimple from "../../components/GlowCardSimple/GlowCardSimple";
import { Fade } from "@material-ui/core";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

class Homepage extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return <Load />; // render null when app is not ready
    }
    const { is_visible } = this.state;
    return (
      <>
        <Loader />

        {/* Child Class */}

        <section id="#">
          <div
            className={`${styles._homepage} ${styles._responsive} ${styles.bg1}`}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/about-us/abacus logo sponsors page.png`}
              alt=""
              style={{
                width: "330px",
                height: "350px",
                margin: "auto",
              }}
            />

            {/* Hidden Images */}

            <img hidden
              src={`${process.env.PUBLIC_URL}/images/workshops/cloud-computing.svg`}
            />
            <img hidden
              src={`${process.env.PUBLIC_URL}/images/workshops/entrepreneurship.svg`}
            />
            <img hidden
              src={`${process.env.PUBLIC_URL}/images/workshops/job-readiness.svg`}
            />

            <div className="container-fluid  ml-sm-0  justify-content-center align-self-center pb-5">
              <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 justify-content-center align-self-center ">
                <div className=" col mt-5   text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={7} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>{" "}
                  <Heading1 text="Events" fontSize="20px" />
                </div>
                <div className=" mt-5   col text-center">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={3} redraw={true} suffix=" +">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Workshops" fontSize="20px" />
                </div>
                <div className="col mt-5 text-center ">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={1} redraw={true} suffix=" ">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                  <Heading1 text="Mega Hackathon" fontSize="20px" />
                </div>
                <div className="col text-center mt-5">
                  <div className={`${styles.countup}`}>
                    <CountUp start={0} end={50} redraw={true} suffix=" K+">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                  </div>
                  <Heading1 text="Prize Money" fontSize="20px" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </section>

        {/* Child Class */}
        {/* <div className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}>
        
           <div class="container justify-content-center align-self-center ">
             <div class="row justify-content-center align-self-center">
               <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                 <FadeInSection>
               <div class="embed-responsive embed-responsive-21by9">
          <iframe src="https://www.youtube.com/embed/W0eDjWr3ATI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> </FadeInSection>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
               <GlowCard props={{degree: "25deg",title:"Abacus'21",content:"CSEA takes immense pleasure in organizing Abacus’21. This version is going to be one of its kind - a symposium completely organized online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships. Grab this opportunity and win cash prizes, Intern Opportunities , T shirts and many surprising prizes."}} />    
                 </div>
             </div>
           </div>
            </div> */}

        <div className={`${styles._homepage} ${styles.bg}`}>
          <div className={`${styles._about_event}`}>
            <div className={`${styles._glowCardDiv}`}>
              <GlowCard
                props={{
                  title: "Abacus'21",
                  list: [
                    "CSEA takes immense pleasure in organizing Abacus’21. This version is going to be one of its kind - a symposium completely online. We operate with a vision – to bring together students from multiple engineering colleges globally and give them a chance to demonstrate their technical prowess, ignite their passion for learning and to win exciting prizes and internships.",
                    "Grab this opportunity and win cash prizes, Intern opportunities, Tshirts and many more prizes.",
                  ],
                }}
              />
            </div>

            <div className={`${styles._eventCardImgDiv}`}>

              <div
                className="embed-responsive embed-responsive-21by9"
                className={styles.eventCardImg}
              >

                <iframe
                  src="https://www.youtube.com/embed/W0eDjWr3ATI"
                  width="100%"
                  height="65%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                </iframe>

              </div>
            </div>
          </div>
        </div>

        {/* Child Class */}
        <div className={`${styles._homepage} ${styles.bg1} ${styles._responsive}`}>
          <div className="text-center mt-0">
            <Heading text="Sponsors" fontSize="50px" />
            </div>
            <div className="container-fluid mx-auto d-flex justify-content-center align-self-center mt-0">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1  d-flex justify-content-center align-self-center">
             
      <div class="col text-center">
      <Heading text="Merchandise Sponsors" fontSize="30px" />
      <div class="row  d-flex justify-content-center align-self-center">
      <div className="col text-center mt-5 pb-5 d-flex justify-content-center align-self-center">
      <FadeInSection>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/Career Crafter.jpg`}
                    className={`${styles.img}`}
                    alt="Career Crafter"
                  />
      </FadeInSection> 

          </div>
               
             </div>
</div>
<div class="col text-center">
             
              <Heading text="Title Sponsors" fontSize="30px" />
           <div class="row row-cols-lg-2 d-flex justify-content-center align-self-center ">
           <div className="col text-center pr-lg-5 mt-5">
                <FadeInSection>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/motorq.svg`}
                    className={`${styles.img}`}
                    alt="Motorq"
                  />
                </FadeInSection>
                </div>

              <div className="col text-center pl-lg-5 mt-5 pb-5">
              <FadeInSection>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/visa_modified.svg`}
                    className={`${styles.img}`}
                    alt="Visa"
                  />
                </FadeInSection> 
              </div>

             </div></div>
<div class="col text-center">
      <Heading text="Internship Sponsors" fontSize="30px" />
      <div class="row  d-flex justify-content-center align-self-center mt-5 pb-5 pt-4">
      <div className="col text-center">
      <FadeInSection>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-us/amazon.jpeg`}
                    className={`${styles.img1}`}
                    alt="Amazon"
                  />
      </FadeInSection> 

          </div>
               
             </div>
</div>
             
             
             </div>
</div>
          
        </div>

        {/* Child Class */}

        {/* Dev Section */}

        <div
          className={`${styles._homepage} ${styles._responsive} ${styles.bg}`}
        >
          <div className="text-center mt-5">
            <Heading text="Developers and Design Team" fontSize="40px" />
          </div>
          <div className="container-fluid m-auto d-flex justify-content-center pt-5 align-self-center pb-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5  d-flex justify-content-center align-self-center pb-5">
              <div className="col   pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Darrshana",
                      title1: "Frontend",
                      img: "dev/darrshana.jpeg",
                      href:
                        "https://www.linkedin.com/in/darrshana-rajkumar-6a36aa1ba",
                    }}
                  /> </FadeInSection>
              </div>

              <div className="col   pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Paargav Shanker",
                      title1: "Frontend",
                      img: "dev/Paargav.jpeg",
                      href:
                        "https://www.linkedin.com/in/paargav-shanker-b6708a194/",
                    }}
                  />
                </FadeInSection>
              </div>


              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Shankar Kumar",
                      title1: "Frontend",
                      img: "dev/shankar.jpeg",
                      href: "https://www.linkedin.com/in/shankar-kumar-s",
                    }}
                  />
                </FadeInSection>
              </div>

              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Srinath Sureshkumar",
                      title1: "Backend",
                      img: "dev/Srinath.jpg",
                      href:
                        "https://www.linkedin.com/in/srinath-sureshkumar-3467331a5/",
                    }}
                  /> </FadeInSection>
              </div>
              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Umar Ahmed",
                      title1: "Frontend",
                      img: "dev/umar.jpeg",
                      href: "https://www.linkedin.com/in/umar-ahmed-6892481b3",
                    }}
                  />
                </FadeInSection>
              </div>
              <div className="col  pb-5  ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Adhithya",
                      title1: "Design",
                      img: "dev/Adhithya_K.jpg",
                      href: "https://www.linkedin.com/in/adhithya-karthikeyan/",
                    }}
                  />
                </FadeInSection>
              </div>
              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Akash",
                      title1: "Design",
                      img: "dev/Akash.jpg",
                      href:
                        "https://www.linkedin.com/in/akash-murugesh-0151531ab/",
                    }}
                  />
                </FadeInSection>
              </div>

              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Deepak",
                      title1: "Design",
                      img: "dev/deepak.jpeg",
                      href: "https://www.linkedin.com/in/deepak24899/",
                    }}
                  /> </FadeInSection>
              </div>
              <div className="col  pb-5 ">
                <FadeInSection>
                  <Dev
                    props={{
                      title: "Rohini",
                      title1: "Design",
                      img: "dev/Rohini R.jpg",
                      href: "https://www.linkedin.com/in/rohini-raja/",
                    }}
                  />
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Homepage;
