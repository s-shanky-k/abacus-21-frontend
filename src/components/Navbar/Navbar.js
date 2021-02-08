import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-md mx-auto" id="navbar">
            <Link className="navbar-brand" to="/homepage">ABACUS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav brackets">

                    <Link className="nav-link" to="/homepage"><span className="nav-link-text">HOMEPAGE</span></Link>


                    <Link className="nav-link" to="/about-us"><span className="nav-link-text">ABOUT US</span></Link>


                    <Link className="nav-link" to="/events"><span className="nav-link-text">EVENTS</span></Link>


                    <Link className="nav-link" to="/workshops"><span className="nav-link-text">WORKSHOPS</span></Link>


                </ul>
            </div>
        </nav>
    )
}
