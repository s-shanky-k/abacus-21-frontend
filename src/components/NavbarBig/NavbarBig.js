import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styles from "./NavbarBig.module.css"

class NavbarBig extends Component {
    render() {
        return (
            <div className={`${styles._navbar}`}>
                <div className={`${styles._navbar_brand}`}>
                    <Link className={`${styles._navbar_brand_link}`}>
                        Abacus
                    </Link>
                </div>

                <div className={`${styles._navbar_main}`}>
                    <Link className={`${styles._navbar_main_link}`} to="/homepage">
                        <span className={`${styles._navbar_main_link_text}`}>Homepage</span>
                    </Link>

                    <Link className={`${styles._navbar_main_link}`} to="/about-us">
                        <span className={`${styles._navbar_main_link_text}`}>About Us</span>
                    </Link>

                    <Link className={`${styles._navbar_main_link}`} to="/events">
                        <span className={`${styles._navbar_main_link_text}`}>Events</span>
                    </Link>

                    <Link className={`${styles._navbar_main_link}`} to="/workshops">
                        <span className={`${styles._navbar_main_link_text}`}>Workshops</span>
                    </Link>

                </div>
            </div>
        )
    }
}

export default NavbarBig
