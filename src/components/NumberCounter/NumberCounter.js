import React from 'react'
import styles from './NumberCounter.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import Heading from '../Heading/Heading'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

/*
Usage:
<GlowCard props={{title:"Boom", content:"This is Everything",degree: "180deg"}}
If degree is not set, then default value 235deg will be set
*/

function NumberCounterCard({ props }) {

    if (props.degree === undefined) {
        props.degree = "235deg";
    }
    return (

        <FadeInSection>
            <div className={styles.bg}>
                <div className={`${styles.box}`} style={{ "--degree": props.degree }}>
                    <div className={`${styles.content}`}>
                        <i className="fa fa-inr" style={{ color: 'grey' }} aria-hidden="true"></i>
                        <div className={`${styles.countup}`} >
                            <div style={{ textAlign: 'center' }}>

                                <CountUp className={styles.glowCardText} start={390} end={props.number} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></div></div>


                    </div>

                </div>
            </div>

        </FadeInSection >
    )
}

export default NumberCounterCard