import React from 'react'
import styles from './GlowCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import Heading from '../Heading/Heading'

/*
Usage:
<GlowCard props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCard({ props }) {



    return (
        <FadeInSection>
            <div className={styles.bg}>
                <div className={`${styles.box} container`}>
                    
                    <div className={`${styles.content}`}>
                        <div className="row justify-content-evenly">

                            <div className={`col-md-3 align-self-center text-center`}>
                                <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" className={styles.glowCardImg} />
                            </div>

                            <div className={`col-md-6 text-center`}>
                                <Heading text={props.title} fontSize="50px" />
                                <p>{props.content}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default GlowCard
