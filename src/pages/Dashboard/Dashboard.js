import React, { Component, useEffect, useRef, useState } from 'react'
import styles from "./Dashboard.module.css"
import { useLocation, withRouter } from 'react-router-dom'
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import Heading from "../../components/Heading/Heading"
import MainTableDiv from "../../components/TableComponents/MainTableDiv/MainTableDiv"
import { apiGetRegistrations } from "../../api/api"
import Cookies from "js-cookie"
import Load from "../../components/Load/Load"
import Footer from "../../components/Footer/Footer"

class Dashboard extends Component {


    constructor(props) {
        super(props)
        this.state = {
            response: [],
            details: {},
            loading: true
        }

    }

    fetchRegistrations = async () => {
        let token = Cookies.get("token")
        let details = JSON.parse(Cookies.get("details"))

        this.setState({ ...this.state, details: details })
        const response = await apiGetRegistrations({ "token": token })
        this.setState({ ...this.state, response: response }, () => {

        })
        this.setState({ loading: false })
    }

    componentDidMount() {
        if (Cookies.get("token") === undefined) {
            this.props.history.push("/login-register")
        }
        else {
            this.fetchRegistrations();
        }
    }

    componentDidUpdate(prevProps, prevState) {
    }



    render() {

        const events = [{ "title": 'All', "purpose": "EVENTS" }]
        const workshops = [{ "title": 'Cloud', "purpose": "CLOUD" }, { "title": 'Security', "purpose": "NETSEC" }, { "title": 'Placements', "purpose": "PLACEMENT" }]
        const hackathon = [{ "title": 'Hackathon', "purpose": "HACKATHON" }]

        if (this.state.loading) {
            return <Load />
        }

        return (
            <>
                <div className={styles._dashboard_wrapper}>

                    {/* Profile */}
                    < div className={styles.profile_wrapper}>
                        <DashboardCard props={{ title: "Profile", details: this.state.details }} />
                    </div>

                    {this.state.response !== [] &&
                        <>
                            {/* Registrations */}
                            <div className={styles._dashboard_display_template}>
                                {/* Events */}
                                <div className={styles.data_display_div}>
                                    <Heading text="Events" fontSize="30px" />
                                    <MainTableDiv data={events} registrationDetails={this.state.response}></MainTableDiv>
                                </div>

                                {/* Workshops */}
                                <div className={styles.data_display_div}>
                                    <Heading text="Workshops" fontSize="30px" />
                                    <MainTableDiv data={workshops} registrationDetails={this.state.response}></MainTableDiv>
                                </div>

                                {/* Hackathon */}
                                <div className={styles.data_display_div}>
                                    <Heading text="Hackathon" fontSize="30px" />
                                    <MainTableDiv data={hackathon} registrationDetails={this.state.response}></MainTableDiv>
                                </div>


                                {/* <MainTableDiv data={this.state.response}></MainTableDiv> */}

                            </div>
                        </>
                    }


                </div>
            <Footer />              
            </>
        )
    }
}

export default withRouter(Dashboard)
