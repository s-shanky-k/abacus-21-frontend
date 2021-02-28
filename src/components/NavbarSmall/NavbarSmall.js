import React, { Component, createRef, useContext } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./NavbarSmall.css"
import { AuthApi } from "../../App"


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
                        <p className="abacus-logo">Abacus</p>

                        <ul className="abacus-list">
                            <li>
                                <HashLink to="/homepage#homepage" className="abacus-list-link">Homepage</HashLink>
                            </li>
                            <li>
                                <HashLink to="/about-us#aboutus" className="abacus-list-link">About Us</HashLink>
                            </li>
                            <li>
                                <HashLink to="/events#events" className="abacus-list-link">Events</HashLink>
                            </li>
                            <li>
                                <HashLink to="/workshops#workshops" className="abacus-list-link">Workshops</HashLink>
                            </li>

                            {/* Conditionally Rendering based on Auth */}
                            {Auth ?
                                (
                                    <>
                                        <li>
                                            <HashLink to="/dashboard" className="abacus-list-link">Dashboard</HashLink>
                                        </li>
                                        <li>
                                            <HashLink className="abacus-list-link" onClick={clickLogout}>Logout</HashLink>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <HashLink to="/login-register" className="abacus-list-link">Login</HashLink>
                                    </li>)

                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
