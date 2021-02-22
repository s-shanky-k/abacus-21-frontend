import React from 'react'
import styles from './GlowCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import PropTypes from 'prop-types';

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
                <div className={styles.box} style={{"--degree":props.degree}}>
                    {/* <div className={styles.glass}></div> */}
                    <div className={styles.content}>
                        <h2>{props.title}</h2>
                        <br />
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default GlowCard
