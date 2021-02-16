import styles from './NeonButton.module.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import FadeInSection from '../FadeInSection/FadeInSection';

/*
Usage:
  <NeonButton text={"Boom Events"} href={"/events"} color={"#26a0da"}/>

  href: needs to be absolute path
*/

function NeonButton({text, href, color}) {

  return ( 
    <FadeInSection >
    <div className={styles.container}>
      <Link className={styles.a_n3} to={href} style={{"--color":color}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
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

