import React, { Component, useEffect, useRef } from 'react'
import styles from "./Dashboard.module.css"
import {useLocation} from 'react-router-dom'
import DashboardCard from "../../components/DashboardCard/DashboardCard"


export default function Dashboard(props) {

    const location = useLocation()

    useEffect(() => {
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
