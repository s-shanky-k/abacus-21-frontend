import React from 'react'
import styles from './Load.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'


function Load({ props }) {

    
    return (
        <>
<div className={`${styles.bars_common} ${styles.bar_one}`}></div>
<div className={`${styles.bars_common} ${styles.bar_two}`}></div>
<div className={`${styles.bars_common} ${styles.bar_three}`}></div>

{/*Rotating squares component */}
<div className={`${styles.squares_common} ${styles.square_one}`}></div>
<div className={`${styles.squares_common} ${styles.square_two}`}></div>
</>
    )
    }

export default Load