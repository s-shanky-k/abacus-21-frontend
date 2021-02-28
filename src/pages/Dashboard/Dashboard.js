import React, { Component, useEffect, useRef } from 'react'
import styles from "./Dashboard.module.css"
import {useLocation} from 'react-router-dom'
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar'
import DashboardCard from "../../components/DashboardCard/DashboardCard"


export default function Dashboard(props) {

    const location = useLocation()
    const CustomSnackBarRef = useRef();

    useEffect(() => {
        if(location.state && location.state.hasOwnProperty("snackbar_message")){
            CustomSnackBarRef.current.handleClick(location.state.snackbar_message);
        }
        return () => {
            
        }
    }, [])


    return (
        <>
            <div className={`${styles._homepage}`} style={{ backgroundColor: "#060c21" }}>
                <div className={`${styles._rulesDivContainer}`}>
                    <div className={`${styles._rulesDiv}`}>
                        <DashboardCard props={{ title: "Events" }} />
                    </div>
                </div>
            </div>
                
            <CustomSnackBar ref={CustomSnackBarRef}></CustomSnackBar>

            <div className={`${styles._homepage}`} style={{ backgroundColor: "#060c21" }}>
                <div className={`${styles._rulesDivContainer}`}>
                    <div className={`${styles._rulesDiv}`}>
                        <DashboardCard props={{ title: "Workshops" }} />
                    </div>
                </div>
            </div>
            
            <div className={`${styles._homepage}`} style={{ backgroundColor: "#060c21" }}>
                <div className={`${styles._rulesDivContainer}`}>
                    <div className={`${styles._rulesDiv}`}>
                        <DashboardCard props={{ title: "Hackathon" }} />
                    </div>
                </div>
            </div>
        </>
        
    )
}
