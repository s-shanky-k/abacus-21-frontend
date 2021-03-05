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

    const events = [{ "title": 'All', "purpose": "EVENTS", "url": "/events" }]
    const workshops = [{ "title": 'Cloud', "purpose": "CLOUD", "url": "/workshops/cloud" }, { "title": 'Security', "purpose": "NETSEC", "url": "/workshops/security" }, { "title": 'Placements', "purpose": "DUMMY", "url": "/workshops/placements" }]
    const hackathon = [{ "title": 'Hackathon', "purpose": "HACKATHON", "url": "/hackathon" }]

    const history = useHistory()

    const [details, setdetails] = useState({})
    const [loading, setloading] = useState(true)
    const [response, setresponse] = useState([])


    useEffect(() => {

        const fetchRegistrations = async () => {
            let token = Cookies.get("token")
            const response = await apiGetRegistrations({ "token": token })
            setresponse(response)
            setloading(false)
        }

        if (Cookies.get("token") === undefined || Cookies.get("details") === undefined) {
            Cookies.remove('token')
            Cookies.remove('details')
            history.push("/login-register")
        }
        else {
            let token = Cookies.get("token")
            let details = JSON.parse(Cookies.get("details"))
            setdetails(details)
            fetchRegistrations();
        }
        return () => {

        }
    }, [])


    return (
        <>
            {
                loading ? <Load /> : <div className={styles._dashboard_wrapper}>


                    <div className={styles._dashboard_container}>
                        {/* Profile */}
                        < div className={styles.profile_wrapper}>
                            <DashboardCard props={{ title: "Profile", details: details }} />
                        </div>

                        {/* Registration */}
                        <div className={styles.registrationDetails_wrapper}>
                            {/* Events */}
                            <div className={styles.data_display_div}>

                                <Heading text="Events" fontSize="30px" />

                                <MainTableDiv data={events} registrationDetails={response}></MainTableDiv>
                            </div>

                            {/* Workshops */}
                            <div className={styles.data_display_div}>

                                <Heading text="Workshops" fontSize="30px" />

                                <MainTableDiv data={workshops} registrationDetails={response}></MainTableDiv>
                            </div>

                            {/* Hackathon */}
                            <div className={styles.data_display_div}>

                                <Heading text="Hackathon" fontSize="30px" />

                                <MainTableDiv data={hackathon} registrationDetails={response}></MainTableDiv>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default Dashboard

