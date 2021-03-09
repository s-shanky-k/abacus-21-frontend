import React, { Component } from 'react'
import styles from "./Dev.module.css"
import Heading from '../Heading/Heading'
import Heading1 from '../Heading1/Heading1'
import FadeInSection from '../FadeInSection/FadeInSection'

function Dev({ props }){
            return (
                <>
        <FadeInSection></FadeInSection> 
      <div style={{justifyContent: 'center',alignItems: 'center'}}>
        <div className= {`${styles.inner}`}>
           <img src={`${process.env.PUBLIC_URL}/images/` + `${props.img}`} alt="" style={{ borderRadius: '100%' ,
        width:'100%',height:'100%' }} /></div>
    <a href={`${props.href}`} target="_blank" style={{textDecoration:'none'}} className={`${styles.hover}`}>
      <p className={`${styles.text}`}>{props.title}</p></a>
        <p className={`${styles.text1}`}>{props.title1}</p>
        <p className={`${styles.text1}`}>{props.company}</p>
        </div>
          
       
</>
        )
    }


export default Dev