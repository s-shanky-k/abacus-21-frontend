import styles from "./Loader.module.css"
import "./Loader2.css"

import { Link } from 'react-scroll'

export default function Loader() {
    return (
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-md-12 ${styles.box1}`}>
                    {/* <div className={`${styles.sign}`}>
                        <span className={`${styles.flicker}`}>a</span>
                        <span className={`${styles.flickerStart}`}>b</span>
                        a<span className={`${styles.flicker2}`}><span className={`${styles.flickerStart3}`}>c</span>
                            <span className={`${styles.flicker3}`}>u</span></span>s<span className={`${styles.flickerStart2}`}>'21</span>
                    </div> */}

                    <div className={`${styles.sign}`}>
                        <span className={`${styles.flicker}`}>a</span>
                            <span className={`${styles.flickerStart}`}>b</span>
                                a<span className={`${styles.flickerStart3}`}>
                                <span className={`${styles.flicker3}`}>c</span></span>u
                                <span className={`${styles.flicker2}`}>s</span><span className={`${styles.flickerStart2}`}>'21</span>
                    </div>
                    <Link to="navbar" spy={true} smooth={true}><i className="fa fa-angle-double-down"></i></Link>
                </div>
            </div>
        </div>

    )
}