import React from 'react'
import styles from './MainTableDiv.module.css'
import RowTableDiv from '../RowTableDiv/RowTableDiv.js'
export default function MainTableDiv(props) {

    let render_data

    if(props.data){
        render_data = props.data.map((item, index) => { return <RowTableDiv title={item} key={index+1}></RowTableDiv>})   
    }
    return (
        <div className={styles.mainTableDiv}>
            {render_data}
        </div>
    )
}
