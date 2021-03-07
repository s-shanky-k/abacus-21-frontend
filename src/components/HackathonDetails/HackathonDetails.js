import React from 'react'
import Heading from '../Heading/Heading'
import NeonButton from '../NeonButton/NeonButton'
import styles from "./HackathonDetails.module.css"

function HackathonDetails(props) {
    console.log(props, "HACk MODAL")
    return (

        <div className={`${styles._hackWrapper}`}>
            <div className={`${styles._headingWrapper}`}>
                <Heading text="Team Details" fontSize="25px" />
            </div>

            <div className={`${styles._detailWrapper}`}>
                <div className={`${styles._participantWrapper}`}>
                    <Participant number={"1"} name={props.data.name1} email={props.data.user1} />
                </div>
                <div className={`${styles._participantWrapper}`}>
                    <Participant number={"2"} name={props.data.name2} email={props.data.user2} />
                </div>
                {props.data.name3 !== null && <div className={`${styles._participantWrapper}`}>
                    <Participant number={"3"} name={props.data.name3} email={props.data.user3} />
                </div>}

            </div>

            <div className={`${styles._buttonWrapper}`}>
                <NeonButton props={{ text: "Close", color: "red", onClick: props.onClose }} />
            </div>
        </div>
    )
}

export default HackathonDetails

const Participant = (props) => {
    return (
        <>
            <p className={`${styles._participant}`}>Participant {props.number}</p>

            <hr />
            <div className={`${styles._detail}`}>
                <p className={`${styles._name}`}><span className={`${styles._title}`}>Name -</span> {props.name}</p>
                {/* <p className={`${styles._name_val}`}>{props.name}</p> */}
            </div>
            <div className={`${styles._detail}`}>
                <p className={`${styles._name}`}><span className={`${styles._title}`}>Email -</span> {props.email}</p>
                {/* <p className={`${styles._name_val}`}>{props.email}</p> */}
            </div>
        </>
    )
}