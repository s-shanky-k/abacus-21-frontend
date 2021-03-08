import React from 'react'
import styles from "./PageNotFound.module.css"
import NeonButton from "../../components/NeonButton/NeonButton"
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import img404 from "../../assets/Images/page-not-found.svg"

function PageNotFound() {
    const history = useHistory()

    const redirect = () => {
        history.push("/homepage")
    }

    return (
        <>
            <div className={`${styles._404_wrapper} ${styles.bg}`}>
                <div className={`${styles._404}`}>
                    {/* Image */}
                    <div className={`${styles._404_img}`}>
                        <img src={img404} alt="" width="250px" height="250px" />
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
            <Footer scroll_snap={false} />
        </>
    )
}

export default PageNotFound
