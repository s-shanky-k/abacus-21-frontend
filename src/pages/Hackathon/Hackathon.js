import React from 'react'
import HackathonTemplate from "../../components/HackathonTemplate/HackathonTemplate";
import {Hackathon as HackData} from "../../assets/Data/HackathonData"

function Hackathon() {
    return (
        <HackathonTemplate props={HackData} />
    )
}

export default Hackathon
