import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link" 
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
                    <HashLink className={`${styles._navbar_main_link}`} to="/homepage#homepage">
                        <span className={`${styles._navbar_main_link_text}`}>Homepage</span>
                    </HashLink>

                    <HashLink className={`${styles._navbar_main_link}`} to="/about-us#aboutus">
                        <span className={`${styles._navbar_main_link_text}`}>About Us</span>
                    </HashLink>

                    <HashLink className={`${styles._navbar_main_link}`} to="/events#events">
                        <span className={`${styles._navbar_main_link_text}`}>Events</span>
                    </HashLink>

                    <HashLink className={`${styles._navbar_main_link}`} to="/workshops#workshops">
                        <span className={`${styles._navbar_main_link_text}`}>Workshops</span>
                    </HashLink>

                </div>
            </div>
        )
    }
}

export default NavbarBig
