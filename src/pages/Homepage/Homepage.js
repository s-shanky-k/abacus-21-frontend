import React, { Component, useRef } from 'react'
import styles from "./Homepage.module.css"




//NeonButton
import NeonButton from '../../components/NeonButton/NeonButton'
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import GlowCard from '../../components/GlowCard/GlowCard'



class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.divRef1 = React.createRef()
        this.divRef2 = React.createRef()
        this.divRef3 = React.createRef()
        this.divRef4 = React.createRef()

        this.getScroll = this.getScroll.bind(this)
    }

    componentDidMount() {
    const script = document.createElement("script");
    script.src = "./bg.js";
    script.async = true;
    document.body.appendChild(script);
    }
    
    getScroll() {
        console.log(document)
    }
    
   



    render() {
        return (
            <>

                {/* Child Class */}
                
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'blue' }}>
                    
                   
                    <div className={`${styles._homepage_container}`}>
                    <canvas/>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    <NeonButton props={{text:"Boom Events", href:"/events", color:"#26a0da"}}/>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'purple' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    <NeonButton props={{text:"Boom Events", href:"/events", color:"#26a0da"}}/>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: '#060c21' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!
                    </div>
                    <GlowCard props={{title:"Boom", content:"This is Everything"}} />
                    <GlowCardResponsive props={{title:"Boom", content:"This is Everything", href:"/events",img:'mass.png'}}/>
                </div>

                {/* Child Class */}
                <div className={`${styles._homepage}`} style={{ backgroundColor: 'green' }}>
                    <div className={`${styles._homepage_container}`}>
                        KABOOOOM-HOMEPAGE!</div>
                </div>
            </>

        )
    }
}

export default Homepage
