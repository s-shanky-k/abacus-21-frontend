import React from 'react'
import styles from './GlowCardSimple.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import Heading from '../Heading/Heading'
import { Width } from "../../App"

/*
Usage:
<GlowCardSimple props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCardSimple({ props }) {

    const _width = React.useContext(Width)


    return (
        <>
            {_width > 1100 ? <AnimatedCard weight={0.05}>
                <FadeInSection>
                    <div className={styles.bg}>
                        <div className={styles.box}>
                            <div className={`${styles.content}`}>
                                <div className={styles.glowCardContent}>
                                    <div style={{ textAlign: 'center' }}>
                                        <Heading text={props.title} fontSize="30px" />
                                    </div>



                                    {props.content === undefined
                                        ? (props.list === undefined)
                                            ? (props.contact === undefined)
                                                ? (props.rounds === undefined)
                                                    ? <> {props.agenda.sessionDetails.map((session, index) => {
                                                        return (
                                                            <>
                                                                <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                                {session.description.map((item, index2) =>
                                                                    <p key={index2 + 1} style={{ color: '#fff' }}>{item}</p>
                                                                )}
                                                            </>
                                                        )
                                                    }
                                                    )
                                                    }
                                                    </>
                                                    /* props.agenda.sessionDetails.map((session,index) => {
                                                        console.log(session);
                                                        <p>{session.title}</p>    
                                                    }) */
                                                    /* props.agenda.sessionDetails.map((session,index)=>{ 
                                                        <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                    }) */
                                                    /* props.agenda.sessionDetails.map((session,index)=>{ 
                                                        <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                        session.description.map((item, index2) =>
                                                            <p key={index2 + 1} style={{color:'#fff'}}>{item}</p>
                                                        )
                                                        }
                                                    ) */
                                                    : props.rounds.roundDetails.map((round, index) =>
                                                        <p key={index + 1} className={styles.glowCardName}>{round.title} - <span style={{ color: '#fff' }}>{round.description}</span></p>
                                                    )
                                                : props.contact.map((person, index) =>
                                                    <p key={index + 1} className={styles.glowCardName}>{person.name} - <i class="fa fa-phone"></i> <span style={{ color: '#fff' }}>{person.mobile}</span></p>
                                                )
                                            : props.list.map((item, index) =>
                                                <p key={index + 1} className={styles.dateTime}>{item}</p>
                                            )
                                        : <p className={styles.glowCardText}><span style={{ color: '#fff' }}>{props.content}</span></p>}
                                </div>

                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </AnimatedCard> : <FadeInSection>
                <div className={styles.bg}>
                    <div className={styles.box}>
                        <div className={`${styles.content}`}>
                            <div className={styles.glowCardContent}>
                                <div style={{ textAlign: 'center' }}>
                                    <Heading text={props.title} fontSize="30px" />
                                </div>



                                {props.content === undefined
                                    ? (props.list === undefined)
                                        ? (props.contact === undefined)
                                            ? (props.rounds === undefined)
                                                ? <> {props.agenda.sessionDetails.map((session, index) => {
                                                    return (
                                                        <>
                                                            <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                            {session.description.map((item, index2) =>
                                                                <p key={index2 + 1} style={{ color: '#fff' }}>{item}</p>
                                                            )}
                                                        </>
                                                    )
                                                }
                                                )
                                                }
                                                </>
                                                /* props.agenda.sessionDetails.map((session,index) => {
                                                    console.log(session);
                                                    <p>{session.title}</p>    
                                                }) */
                                                /* props.agenda.sessionDetails.map((session,index)=>{ 
                                                    <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                }) */
                                                /* props.agenda.sessionDetails.map((session,index)=>{ 
                                                    <p key={index + 1} className={styles.glowCardName}>{session.title}</p>
                                                    session.description.map((item, index2) =>
                                                        <p key={index2 + 1} style={{color:'#fff'}}>{item}</p>
                                                    )
                                                    }
                                                ) */
                                                : props.rounds.roundDetails.map((round, index) =>
                                                    <p key={index + 1} className={styles.glowCardName}>{round.title} - <span style={{ color: '#fff' }}>{round.description}</span></p>
                                                )
                                            : props.contact.map((person, index) =>
                                                <p key={index + 1} className={styles.glowCardName}>{person.name} - <i class="fa fa-phone"></i> <span style={{ color: '#fff' }}>{person.mobile}</span></p>
                                            )
                                        : props.list.map((item, index) =>
                                            <p key={index + 1} className={styles.dateTime}>{item}</p>
                                        )
                                    : <p className={styles.glowCardText}><span style={{ color: '#fff' }}>{props.content}</span></p>}
                            </div>

                        </div>
                    </div>
                </div>
            </FadeInSection>}
        </>

    )
}

export default GlowCardSimple
