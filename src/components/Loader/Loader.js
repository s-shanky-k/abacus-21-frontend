import React, { Component } from 'react'
import styles from "./Loader.module.css"
import "./Loader2.css"
import { Link } from 'react-scroll'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"

class Loader extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.ArrowRef = React.createRef()

        this.clickedArrow = this.clickedArrow.bind(this)
    }


    clickedArrow() {
        console.log("CLICKED ARROW", window.pageYOffset)
    }

    render() {
        return (

            <div className={`${styles._homepage}`} style={{ backgroundColor: 'white' }}>
                {/* <div className={`${styles._loader_box}`}> */}

                <div className={`${styles._loader_sign}`}>
                    <span className={`${styles.flicker}`}>a</span>
                    <span className={`${styles.flickerStart}`}>b</span>
                                a<span className={`${styles.flickerStart3}`}>
                        <span className={`${styles.flicker3}`}>c</span></span>u
                                <span className={`${styles.flicker2}`}>s</span><span className={`${styles.flickerStart2}`}>'21</span>
                </div>

                {/* </div> */}
                <div className={`${styles._loader_arrow}`}>
                    <Link spy={true} smooth={true}><i className="fa fa-angle-double-down" onClick={this.clickedArrow}></i></Link>
                </div>

            </div>
        )
    }
}

export default Loader
