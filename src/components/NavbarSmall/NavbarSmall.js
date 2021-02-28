import React, { Component, createRef } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./NavbarSmall.css"

export default class NavbarSmall extends Component {


    constructor(props) {
        super(props)

        this.state = {
            navbarOpen: false
        }

        this.navLinkRef1 = React.createRef()
        this.navLinkRef2 = React.createRef()
        this.navLinkRef3 = React.createRef()
        this.clickOpenBtn = this.clickOpenBtn.bind(this)
        this.clickCloseBtn = this.clickCloseBtn.bind(this)

    }

    clickOpenBtn() {
        this.navLinkRef1.current.classList.add('visible');
        this.navLinkRef2.current.classList.add('visible');
        this.navLinkRef3.current.classList.add('visible');
    }

    clickCloseBtn() {
        this.navLinkRef1.current.classList.remove('visible');
        this.navLinkRef2.current.classList.remove('visible');
        this.navLinkRef3.current.classList.remove('visible');
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="abacus-nav-container">
                <button className="abacus-nav-btn abacus-open-btn" onClick={this.clickOpenBtn}>
                    <i className="fa fa-bars buttoncolor"></i>
                </button>

                <div className="abacus-nav abacus-nav-black" ref={this.navLinkRef1}>
                    <div className="abacus-nav abacus-nav-red" ref={this.navLinkRef2}>
                        <div className="abacus-nav abacus-nav-white" ref={this.navLinkRef3}>

                            <button className="abacus-nav-btn abacus-close-btn" onClick={this.clickCloseBtn}><i className="fa fa-times"></i></button>

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
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
