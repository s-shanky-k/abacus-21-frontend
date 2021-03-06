import React, { Component, createRef, useContext } from 'react'
import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import "./NavbarSmall.css"
import { AuthApi } from "../../App"
import Heading from "../Heading/Heading"

// this.navLinkRef1 = React.createRef()
// this.navLinkRef2 = React.createRef()
// this.navLinkRef3 = React.createRef()
// this.clickOpenBtn = this.clickOpenBtn.bind(this)
// this.clickCloseBtn = this.clickCloseBtn.bind(this)


export default function NavbarSmall({clickLogout}) {

    const Auth = useContext(AuthApi)

    //Refs
    let navLinkRef1 = React.createRef()
    let navLinkRef2 = React.createRef()
    let navLinkRef3 = React.createRef()

    const clickOpenBtn = () => {
        navLinkRef1.current.classList.add('visible');
        navLinkRef2.current.classList.add('visible');
        navLinkRef3.current.classList.add('visible');
    }

    const closeOnClick = () => {
        clickCloseBtn()
    }

    const clickCloseBtn = () => {
        navLinkRef1.current.classList.remove('visible');
        navLinkRef2.current.classList.remove('visible');
        navLinkRef3.current.classList.remove('visible');
    }

    return (
        <div className="abacus-nav-container">
            <button className="abacus-nav-btn abacus-open-btn" onClick={clickOpenBtn}>
                <i className="fa fa-bars buttoncolor"></i>
            </button>

            <div className="abacus-nav abacus-nav-black" ref={navLinkRef1} >
                <div className="abacus-nav abacus-nav-red" ref={navLinkRef2} >
                    <div className="abacus-nav abacus-nav-white" ref={navLinkRef3} >

                        <button className="abacus-nav-btn abacus-close-btn" onClick={clickCloseBtn}><i className="fa fa-times"></i></button>

                        {/* <img className="netflix-logo" src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Netflix Logo" /> */}
                        <div className="abacus-logo">
                            <Heading text="Abacus" /></div>

                        <ul className="abacus-list">
                            <li onClick={closeOnClick}>
                                <NavHashLink to="/homepage#homepage" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Homepage</NavHashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <NavHashLink to="/about-us#aboutus" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>About Us</NavHashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <NavHashLink to="/events#events" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Events</NavHashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <NavHashLink to="/workshops#workshops" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Workshops</NavHashLink>
                            </li>

                            {/* Conditionally Rendering based on Auth */}
                            {Auth ?
                                (
                                    <>
                                        <li onClick={closeOnClick}>
                                            <NavHashLink to="/dashboard" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Dashboard</NavHashLink>
                                        </li>
                                        <li onClick={closeOnClick}>
                                            <NavHashLink className="abacus-list-link" to="/homepage" onClick={clickLogout} activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Logout</NavHashLink>
                                        </li>
                                    </>
                                ) : (
                                    <li onClick={closeOnClick}>
                                        <NavHashLink to="/login-register" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Login</NavHashLink>
                                    </li>)

                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
