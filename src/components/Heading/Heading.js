import styles from "./Heading.module.css"
import React from 'react'

export default function Heading({text,fontSize,fontFamily}) {
    return (
        <>
        {fontFamily !== undefined 
            ? <div className={`${styles._heading}`} style={{fontSize:`${fontSize}`, fontFamily:`${fontFamily}`, letterSpacing:'2px'}}>
                {text}
               </div>

            : <div className={`${styles._heading}`} style={{fontSize:`${fontSize}`}}>
                {text}
               </div>
        }
        </>
    )
}

