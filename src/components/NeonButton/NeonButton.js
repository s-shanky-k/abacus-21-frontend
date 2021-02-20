import styles from './NeonButton.module.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import FadeInSection from '../FadeInSection/FadeInSection';

/*
Usage:
  <NeonButton props={{text:"Boom Events", href:"/events", color:"#26a0da"}}/>

  href: needs to be absolute path
*/

function NeonButton({props}) {

  return ( 
    <FadeInSection >
    <div className={styles.container}>
      <Link className={styles.a_n3} to={props.href} style={{"--color":props.color}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.text}
      </Link>  
    </div>
    </FadeInSection>
  )
}

NeonButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired  
}

export default NeonButton

