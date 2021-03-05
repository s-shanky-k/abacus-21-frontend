import React from 'react'
import styles from "./PageNotFound.module.css"
import NeonButton from "../../components/NeonButton/NeonButton"
import { useHistory } from "react-router-dom";

function PageNotFound() {
    const history = useHistory()

    const redirect = () => {
        history.push("/homepage")
    }

    return (
        <div className={`${styles._404_wrapper}`}>
            <div className={`${styles._404}`}>
                {/* Image */}
                <div className={`${styles._404_img}`}>
                    {/* <img src={img404} alt="" /> */}
                    <h1 style={{ color: 'white' }}>IMAGE</h1>
                </div>
                {/* Text */}
                <div className={`${styles._404_text_wrapper}`}>
                    <div className={`${styles._404_text}`}>
                        <span className={`${styles.normalFlicker}`}>4</span><span className={`${styles.slowFlicker}`}>0</span><span className={`${styles.normalFlicker}`}>4!</span>
                    </div>
                    <div className={`${styles._404_text_addi}`}>
                        <p>The page you requested could not be found.</p>
                        <NeonButton props={{ text: "Homepage", color: "#26a0da", onClick: redirect }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
