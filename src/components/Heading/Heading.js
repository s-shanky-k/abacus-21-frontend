import styles from "./Heading.module.css"
import React from 'react'

export default function Heading({text,fontSize}) {
    return (
        <div className={`${styles._heading}`} style={{fontSize:`${fontSize}`}}>
            {text}
        </div>
    )
}

