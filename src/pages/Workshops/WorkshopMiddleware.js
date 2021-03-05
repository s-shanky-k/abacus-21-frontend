import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Workshops } from "../../assets/Data/WorkshopsData"
import EventTemplate from "../../components/EventTemplate/EventTemplate"

export default function WorkshopMiddleware() {

    const { title } = useParams()
    const data = Workshops[title]
    const history = useHistory()
    if (!data) {
        history.push("/404")
    }

    return (
        <EventTemplate props={data} />
        // <EventTemplate props={{
        //     name: "Tenet",
        //     refName: "tenet",
        //     about: `TENET is a challenge where the participants have to identify 
        //             and resolve bugs, which makes the system unproblematic. Logical thinking
        //             of the programmer is tested through this event where the participant has 
        //             to come up with unique solutions to produce an expected output.`,
        //     rules: ["A domain will be given on the day of hackathon",
        //         "The teams should develop a software in the same domain.",
        //         "A team must consist of 2 members.",
        //         "The team members need not necessarily be from the same institution/college.",
        //         "Participants can not be a member of more than a team",
        //         "Teams involved in any kind of malpractice will be disqualified immediately",
        //         "The decision of the judges will be final"
        //     ],
        //     contact: ["Person Name - 9876543210",
        //         "Person Name - 9876543210",
        //         "Person Name - 9876543210"
        //     ],
        //     venueTime: ["1. The event is the best event",
        //         "2. All participants need to be there",
        //         "3. Max four in a group only"]
        // }} />
    )
}

