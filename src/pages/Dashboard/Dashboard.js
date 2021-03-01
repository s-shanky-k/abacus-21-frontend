import React, { Component, useEffect, useRef, useState } from 'react'
import styles from "./Dashboard.module.css"
import {useLocation} from 'react-router-dom'
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar'
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import Heading from "../../components/Heading/Heading"
import MainTableDiv from "../../components/TableComponents/MainTableDiv/MainTableDiv"

// const event = ['All'];
// const workshop = ['Cloud', 'Security', 'Placements']

export default function Dashboard(props) {

    const location = useLocation()
    const CustomSnackBarRef = useRef();
    const [event, setevent] = useState([])
    const [workshop, setworkshop] = useState([])


    useEffect(() => {
        const populate = async () => {
            setevent(['All','Test','Test'])
            setworkshop(['Cloud', 'Security', 'Placements'])
        }

        populate();
        
        if(location.state && location.state.hasOwnProperty("snackbar_message")){
            CustomSnackBarRef.current.handleClick(location.state.snackbar_message);
        }
        return () => {
            
        }
    }, [])


    return (
        <>
            <div className={styles._dashboard_wrapper}>
                <div className={styles.profile_wrapper}><DashboardCard props={{ title: "Profile" }} /></div>
                <div className={styles._dashboard_display_template}>
                    <div className={styles.data_display_div}>
                        <Heading text="Events" fontSize="30px" />
                        <MainTableDiv data={event}></MainTableDiv>
                    </div>
                    <div className={styles.data_display_div}>
                        <Heading text="Workshops" fontSize="30px" />
                        <MainTableDiv data={workshop}></MainTableDiv>
                    </div>
                    <div className={styles.data_display_div}>
                        <Heading text="Hackathon" fontSize="30px" />
                        <MainTableDiv></MainTableDiv>
                    </div>
                </div>
            </div>

            <CustomSnackBar ref={CustomSnackBarRef}></CustomSnackBar>  
        </>
        
    )
}
