import React, { Component, useContext } from 'react'
import { Link, useHistory, withRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "./NavbarBig.module.css"
import { AuthApi } from "../../App"
import Heading from "../Heading/Heading"

function NavbarBig({ clickLogout }) {

    const Auth = useContext(AuthApi)
    const history = useHistory()

    return (
        <div className={`${styles._navbar}`}>
            <div className={`${styles._navbar_brand}`}>
                <Link to="/homepage" className={`${styles._navbar_brand_link}`}>
                    <Heading text="Abacus'21"/>
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

                {/* Conditionally rendering based on Authentication */}
                {Auth ?
                    (<><Link className={`${styles._navbar_main_link}`} to="/dashboard">
                        <span className={`${styles._navbar_main_link_text}`}>Dashboard</span>
                    </Link>
                    <Link className={`${styles._navbar_main_link}`} onClick={clickLogout}>
                        <span className={`${styles._navbar_main_link_text}`}>Logout</span>
                    </Link></>
                    )
                    :
                    (<Link className={`${styles._navbar_main_link}`} to="/login-register">
                        <span className={`${styles._navbar_main_link_text}`}>Login</span>
                    </Link>)}


            </div>
        </div>
    )
}

export default withRouter(NavbarBig)