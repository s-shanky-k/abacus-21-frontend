import React, { Component, useEffect, useRef, useState } from 'react'
import styles from "./Dashboard.module.css"
import { useLocation } from 'react-router-dom'
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import Heading from "../../components/Heading/Heading"
import MainTableDiv from "../../components/TableComponents/MainTableDiv/MainTableDiv"
import { apiGetRegistrations } from "../../api/api"
import Cookies from "js-cookie"
import Load from "../../components/Load/Load"
import Footer from "../../components/Footer/Footer"

export default class Dashboard extends Component {


    constructor(props) {
        super(props)
        this.state = {
            response: [],
            loading: true
        }

    }

    fetchRegistrations = async () => {
        let token = Cookies.get("token")
        const response = await apiGetRegistrations({ "token": token })
        this.setState({ ...this.state, response: response }, () => {
            console.log(this.state.response, "RESPONSE FROM SERVER")
        })
        this.setState({ loading: false })
    }

    componentDidMount() {
        this.fetchRegistrations();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("COMPONENT DID MOUNT")
    }



    render() {

        const events = ['All']
        const workshops = ['Cloud', 'Security', 'Placements']
        const hackathon = ['Hackathon']

        if (this.state.loading) {
            return <Load />
        }

        return (
            <>
                <div className={styles._dashboard_wrapper}>

                    {/* Profile */}
                    < div className={styles.profile_wrapper}>
                        <DashboardCard props={{ title: "Profile" }} />
                    </div>

                    {/* Registrations */}
                    <div className={styles._dashboard_display_template}>
                        {/* Events */}
                        {/* <div className={styles.data_display_div}>
                        <Heading text="Events" fontSize="30px" />
                        <MainTableDiv data={events} ></MainTableDiv>
                    </div> */}

                        {/* Workshops */}
                        {/* <div className={styles.data_display_div}>
                        <Heading text="Workshops" fontSize="30px" />
                        <MainTableDiv data={workshops}></MainTableDiv>
                    </div> */}
                        {/* Hackathon */}
                        {/* <div className={styles.data_display_div}>
                        <Heading text="Hackathon" fontSize="30px" />
                        <MainTableDiv data={hackathon}></MainTableDiv>
                    </div> */}
                        {this.state.response !== [] &&
                            <div className={styles.data_display_div}>
                                <Heading text="Test" fontSize="30px" />
                                <MainTableDiv data={this.state.response}></MainTableDiv>
                            </div>
                        }
                    </div>


                </div>
            <Footer />              
            </>
        )
    }
}


