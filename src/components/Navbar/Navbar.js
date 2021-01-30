import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-md mx-auto" id="navbar">
            <Link className="navbar-brand" to="/homepage">ABACUS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/homepage">HOMEPAGE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">EVENTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/workshops">WORKSHOPS</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
