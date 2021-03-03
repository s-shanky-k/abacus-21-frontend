import styles from './NeonButton.module.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import FadeInSection from '../FadeInSection/FadeInSection';

/*
Usage:
  <NeonButton props={{text:"Boom Events", href:"/events", color:"#26a0da"}}/>

  href: needs to be absolute path
*/

function NeonButton({ props }) {

  return (
    // <FadeInSection >


    < div className={styles.container}>

      <div className={styles.a_n3} onClick={() => { props.onClick && (props.parameters ? props.onClick(props.parameters) : props.onClick()) }} style={{ "--color": props.color }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.text}
      </div>
    </div >
    // </FadeInSection>
  )
}


export default NeonButton

