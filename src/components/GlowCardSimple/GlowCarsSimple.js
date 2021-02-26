import React from 'react'
import styles from './GlowCardSimple.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'

/*
Usage:
<GlowCardSimple props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCardSimple({props}) {
    return (
        <FadeInSection>
            <div className={styles.bg}>
                <div className={styles.box}>
                    <div className={styles.glass}></div>
                    <div className={styles.content}>
                        <h2>{props.title}</h2>
                        <br/>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default GlowCardSimple
