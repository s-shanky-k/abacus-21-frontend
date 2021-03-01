import React from 'react'
import styles from './DashboardCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import Heading from '../Heading/Heading'

function GlowCardSimple({ props }) {
    return (

        <FadeInSection>
                <div className={styles.bg}>
                    <div className={styles.box}>
                        <div className={`${styles.content}`}>
                            <div className={styles.glowCardContent}>
                                <div style={{ textAlign: 'center' }}>
                                    <Heading text={props.title} fontSize="30px" />
                                    <div className={styles.profile_data_div}>
                                        <div className={styles.profile_data_title}>
                                            <ul>
                                                <li>Abacus ID</li>
                                                <li>Name</li>
                                                <li>Email ID</li>
                                                <li>Phone</li>
                                            </ul>
                                        </div>
                                        <div className={styles.profile_data_item}>
                                            <ul>
                                                <li>123456</li>
                                                <li>Paargav Shanker</li>
                                                <li>paargav.shuttle@gmail.com</li>
                                                <li>9876543210</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </FadeInSection>

    )
}

export default GlowCardSimple
