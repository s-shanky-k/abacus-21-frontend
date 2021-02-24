import React, { Component } from 'react'
import styles from "./Events.module.css"
import NumberCounterCard from '../../components/NumberCounter/NumberCounter'


class Events extends Component {
    render() {
        return (
            <>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: '#060c21'}}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-EVENTS!</div>
                        <div>
                            <NumberCounterCard props={{number:500}}/>
                        </div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-EVENTS!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'pink' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-EVENTS!</div>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-EVENTS!</div>
                        <div>
                            <NumberCounterCard props={{number:500}}/>
                        </div>  
                        
                        </div>
            </>
        )
    }
}

export default Events
