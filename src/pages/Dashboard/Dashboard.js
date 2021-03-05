import { Component, useEffect, useRef, useState, useCallback } from 'react'
import styles from "./Dashboard.module.css"
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import Heading from "../../components/Heading/Heading"
import MainTableDiv from "../../components/TableComponents/MainTableDiv/MainTableDiv"
import { apiGetRegistrations } from "../../api/api"
import Cookies from "js-cookie"
import Load from "../../components/Load/Load"
import Footer from "../../components/Footer/Footer"


import React from 'react'

function Dashboard() {

    const history = useHistory()

    const [details, setdetails] = useState({})


    useEffect(() => {

        if (Cookies.get("token") === undefined) {
            history.push("/login-register")
        }
        else {
            let token = Cookies.get("token")
            let details = JSON.parse(Cookies.get("details"))
            setdetails(details)
        }
        return () => {

        }
    }, [])

    return (
        <>
            <div className={styles._dashboard_wrapper}>

                {/* Profile */}
                < div className={styles.profile_wrapper}>
                    <DashboardCard props={{ title: "Profile", details: details }} />
                </div>

                <div className={styles.registrationDetails_wrapper}>
                    <RegistrationDetails />
                </div>
            </div>

        </>
    )
}

export const RegistrationDetails = () => {

    const events = [{ "title": 'All', "purpose": "EVENTS" }]
    const workshops = [{ "title": 'Cloud', "purpose": "CLOUD" }, { "title": 'Security', "purpose": "NETSEC" }, { "title": 'Placements', "purpose": "DUMMY" }]
    const hackathon = [{ "title": 'Hackathon', "purpose": "HACKATHON" }]

    const useForceUpdate = () => {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }

    const [loading, setloading] = useState(true)
    const [response, setresponse] = useState([])
    const [rerender, setrerender] = useState()

    const forceUpdate = useForceUpdate();



    const history = useHistory()

    useEffect(() => {
        const fetchRegistrations = async () => {
            let token = Cookies.get("token")
            const response = await apiGetRegistrations({ "token": token })
            setresponse(response)
            setloading(false)
        }

        if (Cookies.get("token") === undefined) {
            history.push("/login-register")
        }
        else {
            fetchRegistrations();
        }

        return () => {

        }
    }, [])

    return (
        <>

            {/* Events */}
            <div className={styles.data_display_div}>

                <Heading text="Events" fontSize="30px" />

                <MainTableDiv data={events} registrationDetails={response} forceUpdate={forceUpdate}></MainTableDiv>
            </div>

            {/* Workshops */}
            <div className={styles.data_display_div}>

                <Heading text="Workshops" fontSize="30px" />

                <MainTableDiv data={workshops} registrationDetails={response} forceUpdate={forceUpdate}></MainTableDiv>
            </div>

            {/* Hackathon */}
            <div className={styles.data_display_div}>

                <Heading text="Hackathon" fontSize="30px" />

                <MainTableDiv data={hackathon} registrationDetails={response} forceUpdate={forceUpdate}></MainTableDiv>
            </div>


        </>
    )

}

export default Dashboard

