import React from 'react'
import styles from './GlowCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'

/*
Usage:
<GlowCard props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCard({ props }) {

   

    return (
        <FadeInSection>
            <div className={styles.bg}>
                <div className={styles.box}>
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
