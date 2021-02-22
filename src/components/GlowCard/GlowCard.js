import React from 'react'
import styles from './GlowCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import Heading from '../Heading/Heading'

/*
Usage:
<GlowCard props={{title:"Boom", content:"This is Everything",degree: "180deg"}}
If degree is not set, then default value 235deg will be set
*/

function GlowCard({ props }) {

    if(props.degree === undefined){
        props.degree = "235deg";
    }
    return (

        <FadeInSection>
            <div className={styles.bg}>
                <div className={`${styles.box}`} style={{"--degree":props.degree}}>
                    
                    
                    <div className={`${styles.content}`}>
                        <div className={styles.glowCardImgDiv}>
                            <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" className={styles.glowCardImg} />
                        </div>

                        
                        <div className={styles.glowCardContent}>
                            <div style={{textAlign:'center'}}>
                                <Heading text={props.title} fontSize="50px" />
                            </div>
                                <p className={styles.glowCardText}>{props.content}</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        </FadeInSection >
    )
}

export default GlowCard

{/*<FadeInSection>
            <div className={styles.bg}>
                <div className={`${styles.box} container`}>
                    
                    <div className={`${styles.content}`}>
                        <div className="row justify-content-evenly">

                            <div className={`col-sm-3 align-self-center text-center`}>
                                <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" className={styles.glowCardImg} />
                            </div>

                            <div className={`col-sm-5 text-center`}>
                                <Heading text={props.title} fontSize="50px" />
                                <p>{props.content}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>*/}