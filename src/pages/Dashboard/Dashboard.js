import { Component, useEffect, useRef, useState, useCallback } from 'react'
import styles from "./Dashboard.module.css"
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import Heading from "../../components/Heading/Heading"
import MainTableDiv from "../../components/TableComponents/MainTableDiv/MainTableDiv"
import { apiGetRegistrations, apiGetHackathonRegistration } from "../../api/api"
import Cookies from "js-cookie"
import Load from "../../components/Load/Load"
import Footer from "../../components/Footer/Footer"
import Modal from "react-modal"
import { toast } from "react-toastify"



import React from 'react'

Modal.setAppElement('#root')
toast.configure()
function Dashboard(props) {

    const events = [{ "title": 'All', "purpose": "EVENTS", "url": "/events" }]
    const workshops = [{
        "title": 'Cloud Computing',
        "purpose": "CLOUD",
        "url": "/workshops/cloud-computing"
    }, {
        "title": 'Entrepreneurship',
        "purpose": "ENTREPRENEURSHIP",
        "url": "/workshops/entrepreneurship"
    }, {
        "title": 'Job Readiness',
        "purpose": "PLACEMENTS",
        "url": "/workshops/job-readiness"
    }]
    const hackathon = { "title": 'Hackathon', "purpose": "HACKATHON", "url": "/hackathon" }

    const history = useHistory()
    const location = useLocation()

    const [details, setdetails] = useState({})
    const [loading, setloading] = useState(true)
    const [response1, setresponse1] = useState([])
    const [response2, setresponse2] = useState({})


    useEffect(() => {

        const fetchRegistrations = async () => {
            let token = Cookies.get("token")
            const response1 = await apiGetRegistrations({ "token": token })
            const response2 = await apiGetHackathonRegistration({ 'token': token })
            setresponse1(response1)
            setresponse2(response2)
            setloading(false)
        }


        if (Cookies.get("token") === undefined || Cookies.get("details") === undefined) {
            Cookies.remove('token')
            Cookies.remove('details')
            history.push("/login-register")
        }
        else {
            let queryString = require('query-string')
            let params = queryString.parse(location.search)
            if (!(Object.keys(params).length === 0)) {
                toast.success(params.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
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
                loading ? <Load /> : <> <div className={styles._dashboard_wrapper}>


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

                                <MainTableDiv data={events} registrationDetails={response1} type="events"></MainTableDiv>
                            </div>

                            {/* Workshops */}
                            <div className={styles.data_display_div}>

                                <Heading text="Workshops" fontSize="30px" />

                                <MainTableDiv data={workshops} registrationDetails={response1} type="events"></MainTableDiv>
                            </div>

                            {/* Hackathon */}
                            <div className={styles.data_display_div}>

                                <Heading text="Hackathon" fontSize="30px" />

                                <MainTableDiv data={hackathon} registrationDetails={response2} type="hackathon"></MainTableDiv>
                            </div>
                        </div>
                    </div>
                </div>

                    <Footer scroll_snap={false} />
                </>
            }


        </>
    )
}

export default Dashboard

