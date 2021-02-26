import React from 'react'
import styles from './GlowCardResponsive.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import {Link} from "react-router-dom";
import massImg from '../../assets/Images/mass.png'
import Heading from '../Heading/Heading'
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
                {props.href !== undefined  
                ?    <Link to={props.href}>
                    <div className={styles.imgbx}>
                        <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt=""/>
                    </div>
                    </Link>
                :   <div className={styles.imgbx}>
                        <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt=""/>
                    </div>
                }
                <div className={styles.content}>
                    <h2>
                    <div style={{ textAlign: 'center' , paddingBottom:'5px'}}>
                            {props.titleFontFamily !== undefined 
                            ?  <Heading text={props.title} fontSize="34px" fontFamily={props.titleFontFamily}/>
                            :  <Heading text={props.title} fontSize="28px"/>
                            }
                          
                    </div>
                    <span>{props.content}</span>
                    </h2>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default GlowCardResponsive
