import React from 'react'
import EventTemplate from "../../components/EventTemplate/EventTemplate";
import {Hackathon as HackData} from "../../assets/Data/HackathonData"

function Hackathon() {
    return (
        <EventTemplate props={HackData} />
    )
}

export default Hackathon
