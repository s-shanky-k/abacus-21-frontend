import React, { Component } from 'react'
import styles from "./GlowCircle.module.css"
import Heading from '../Heading/Heading'
import Heading1 from '../Heading1/Heading1'
import FadeInSection from '../FadeInSection/FadeInSection'

function GlowCircle({ props }){
            return (
                <>
              <FadeInSection></FadeInSection>    
            <div className={`${styles.inner}`}>
           <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" style={{ borderRadius: '100%' ,
        width:'100%',height:'100%' }} />
          </div>
          
</>
        )
    }


export default GlowCircle