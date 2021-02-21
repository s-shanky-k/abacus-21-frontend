import React from 'react'
import styles from './GlowCardResponsive.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import {Link} from "react-router-dom";
import massImg from '../../assets/Images/mass.png'

/*
Usage: 
<GlowCardResponsive props={{title:"Boom", content:"This is Everything", href:"/events"}}/>

Todo: Need to pass image as a prop and display it on the card
*/
function GlowCardResponsive({props}) {
    return (
        <FadeInSection>
        <div className={styles.bg}>
            <div className={styles.box}>
                <Link to={props.href}>
                <div className={styles.imgbx}>
                <img src={`${process.env.PUBLIC_URL}/images/`+`${props.img}`}/>
                   
                </div>
                </Link>
                <div className={styles.content}>
                    <h2>{props.title}
                    <br/>
                    <span>{props.content}</span>
                    </h2>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default GlowCardResponsive
