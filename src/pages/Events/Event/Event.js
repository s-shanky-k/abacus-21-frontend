import React from 'react'
import { useParams } from 'react-router-dom'

export default function Event() {
    const {title} = useParams()
    return (
        <div>
           <h1 style={{color:'white'}}>{title}</h1> 
        </div>
    )
}
