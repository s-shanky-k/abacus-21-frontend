import React, { Component, createRef, useContext } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./NavbarSmall.css"
import { AuthApi } from "../../App"
import Heading from "../Heading/Heading"


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
                            <Heading text="Abacus'21" /></div>

                        <ul className="abacus-list">
                            <li onClick={closeOnClick}>
                                <HashLink to="/homepage##" className="abacus-list-link">Homepage</HashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <HashLink to="/about-us##" className="abacus-list-link">About Us</HashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <HashLink to="/events##" className="abacus-list-link">Events</HashLink>
                            </li>
                            <li onClick={closeOnClick}>
                                <HashLink to="/workshops##" className="abacus-list-link">Workshops</HashLink>
                            </li>

                            {/* Conditionally Rendering based on Auth */}
                            {Auth ?
                                (
                                    <>
                                        <li onClick={closeOnClick}>
                                            <HashLink to="/dashboard" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Dashboard</HashLink>
                                        </li>
                                        <li onClick={closeOnClick}>
                                            <HashLink className="abacus-list-link" to="" onClick={clickLogout} activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Logout</HashLink>
                                        </li>
                                    </>
                                ) : (
                                    <li onClick={closeOnClick}>
                                        <HashLink to="/login-register" className="abacus-list-link" activeClassName="selected"
  activeStyle={{ color: '#ff2483' }}>Login</HashLink>
                                    </li>)

                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
