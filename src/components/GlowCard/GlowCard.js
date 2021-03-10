import React from 'react'
import styles from './GlowCard.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import Heading from '../Heading/Heading'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import { Width } from "../../App"

/*
Usage:
<GlowCard props={{title:"Boom", content:"This is Everything",degree: "180deg"}}
    If degree is not set, then default value 235deg will be set

If there is no content prop, then the list prop will be used to print in a list format
<GlowCard props={{title:"Boom", list:["asudn","asjfdnsajn","asnjdlamk"],degree: "180deg"}}
*/

function GlowCard({ props }) {

    const _width = React.useContext(Width)

    if (props.degree === undefined) {
        props.degree = "235deg";
    }
    return (
        <>
            {_width > 1100 ? <AnimatedCard weight={0.05}>
                <FadeInSection>
                    <div className={styles.bg}>
                        <div className={`${styles.box}`} style={{ "--degree": props.degree }}>

                            <div className={`${styles.content}`}>
                                {props.img !== undefined &&
                                    <div className={styles.glowCardImgDiv}>
                                        <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" className={styles.glowCardImg} />
                                    </div>
                                }

                                <div className={styles.glowCardContent}>
                                    <div style={{ textAlign: 'center' }}>
                                        <a target="blank" href={props.href} style={{textDecoration:"none"}}><Heading text={props.title} fontSize="30px" /></a>
                                    </div>
                                    {/* {props.content === undefined 
                                ? props.list.map((item) => 
                                    <p key={item.id} className={styles.glowCardText}>{item.text}</p>
                                )
                                : <p className={styles.glowCardText}>{props.content}</p>} */}
                                    {(props.textAlign === undefined)
                                        ? (props.content === undefined)
                                            ? props.list.map((item, index) =>
                                                <p key={index + 1} className={styles.glowCardText}>{item}</p>
                                            )
                                            : <p className={styles.glowCardText}>{props.content}</p>
                                        : (props.content === undefined)
                                            ? (props.list !== undefined)
                                                ? props.list.map((item, index) =>
                                                    <p key={index + 1} className={styles.glowCardText} style={{ textAlign: `${props.textAlign}` }}>{index + 1}) {item}</p>
                                                )
                                                : props.un_list.map((item, index) =>
                                                    <p key={index + 1} className={styles.glowCardText} style={{ textAlign: `${props.textAlign}` }}>{item}</p>
                                                )
                                            : <p className={styles.glowCardText}>{props.content}</p>
                                    }

                                </div>

                            </div>

                        </div>
                    </div>

                </FadeInSection >
            </AnimatedCard> : <FadeInSection>
                <div className={styles.bg}>
                    <div className={`${styles.box}`} style={{ "--degree": props.degree }}>

                        <div className={`${styles.content}`}>
                            {props.img !== undefined &&
                                <div className={styles.glowCardImgDiv}>
                                    <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" className={styles.glowCardImg} />
                                </div>
                            }

                            <div className={styles.glowCardContent}>
                                <div style={{ textAlign: 'center' }}>
                                <a target="blank" href={props.href} style={{textDecoration:"none"}}><Heading text={props.title} fontSize="30px" /></a>
                                </div>
                                {/* {props.content === undefined 
                                ? props.list.map((item) => 
                                    <p key={item.id} className={styles.glowCardText}>{item.text}</p>
                                )
                                : <p className={styles.glowCardText}>{props.content}</p>} */}
                                {(props.textAlign === undefined)
                                    ? (props.content === undefined)
                                        ? props.list.map((item, index) =>
                                            <p key={index + 1} className={styles.glowCardText}>{item}</p>
                                        )
                                        : <p className={styles.glowCardText}>{props.content}</p>
                                    : (props.content === undefined)
                                        ? (props.list !== undefined)
                                            ? props.list.map((item, index) =>
                                                <p key={index + 1} className={styles.glowCardText} style={{ textAlign: `${props.textAlign}` }}>{index + 1}) {item}</p>
                                            )
                                            : props.un_list.map((item, index) =>
                                                <p key={index + 1} className={styles.glowCardText} style={{ textAlign: `${props.textAlign}` }}>{item}</p>
                                            )
                                        : <p className={styles.glowCardText}>{props.content}</p>
                                }

                            </div>

                        </div>

                    </div>
                </div>

            </FadeInSection >}
        </>

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