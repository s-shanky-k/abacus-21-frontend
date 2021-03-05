import React, { Component, useContext } from 'react'
import { Link, useHistory, withRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
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
                    <Heading text='Abacus'/>
                </Link>
            </div>

            <div className={`${styles._navbar_main}`}>
                <NavHashLink className={`${styles._navbar_main_link}`}  to="/homepage##" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>
                    <span className={`${styles._navbar_main_link_text}`}>Homepage</span>
                </NavHashLink>

                <NavHashLink className={`${styles._navbar_main_link}`} to="/about-us##" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>
                    <span className={`${styles._navbar_main_link_text}`}>About Us</span> 
                </NavHashLink>

                <NavHashLink className={`${styles._navbar_main_link}`} to="/events#events" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>
                    <span className={`${styles._navbar_main_link_text}`}>Events</span>
                </NavHashLink>

                <NavHashLink className={`${styles._navbar_main_link}`} to="/workshops##" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>
                    <span className={`${styles._navbar_main_link_text}`}>Workshops</span>
                </NavHashLink>

                {/* Conditionally rendering based on Authentication */}
                {Auth ?
                    (<><NavHashLink className={`${styles._navbar_main_link}`} to="/dashboard" activeClassName="selected"
                    activeStyle={{ color: '#ff2483' }}>
                        <span className={`${styles._navbar_main_link_text}`}>Dashboard</span>
                    </NavHashLink>
                    <NavHashLink to="/homepage" className={`${styles._navbar_main_link}`} onClick={clickLogout} activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>
                        <span className={`${styles._navbar_main_link_text}`}>Logout</span>
                    </NavHashLink></>
                    )
                    :
                    (<NavHashLink className={`${styles._navbar_main_link}`} to="/login-register" activeClassName="selected"
                    activeStyle={{ color: '#ff2483' }}>
                        <span className={`${styles._navbar_main_link_text}`}>Login</span>
                    </NavHashLink>)}


            </div>
        </div>
    )
}

export default withRouter(NavbarBig)