import React from 'react'
import styles from './DashboardCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import Heading from '../Heading/Heading'
import DashboardTableComponent from '../DashboardTableComponent/DashboardTableComponent'
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import BrandingWatermarkRoundedIcon from '@material-ui/icons/BrandingWatermarkRounded';


/*
Usage:
<GlowCardSimple props={{title:"Boom", content:"This is Everything"}}
*/

function GlowCardSimple({ props }) {
    return (

        <FadeInSection>
            {/* <AnimatedCard weight={0.05}> */}
            <div className={styles.bg}>
                <div className={styles.box}>
                    <div className={`${styles.content}`}>
                        <div className={styles.glowCardContent}>
                            <Heading text={props.title} fontSize="30px" />
                            <div className={styles.profile_data_div}>
                                <p className={`${styles.userDetails}`}>
                                    <BrandingWatermarkRoundedIcon className={`${styles.icon}`} />{props.details.abacusid}
                                </p>
                                <p className={`${styles.userDetails}`}>
                                    <PersonIcon className={`${styles.icon}`} />{props.details.name}
                                </p>
                                <p className={`${styles.userDetails}`}>
                                    <MailOutlineIcon className={`${styles.icon}`} />{props.details.email}
                                </p>
                                <p className={`${styles.userDetails}`}>
                                    <PhoneIcon className={`${styles.icon}`} />{props.details.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </AnimatedCard> */}
        </FadeInSection>

    )
}

export default GlowCardSimple
