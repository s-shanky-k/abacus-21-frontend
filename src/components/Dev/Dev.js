import React, { Component } from 'react'
import styles from "./Dev.module.css"
import Heading from '../Heading/Heading'
import Heading1 from '../Heading1/Heading1'
import FadeInSection from '../FadeInSection/FadeInSection'

function Dev({ props }){
            return (
                <>
        <FadeInSection></FadeInSection>    
        <div className= {`${styles.inner}`} >
           <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" style={{ borderRadius: '100%' ,
        width:'100%',height:'100%' }} />
          </div>
          <div style={{ paddingTop: '30px' ,textAlign:'center'}}>
          <Heading1 text={props.title} fontSize="18px" />
          <Heading1 text={props.title1} fontSize="15px" />
    </div>
</>
        )
    }


export default Dev