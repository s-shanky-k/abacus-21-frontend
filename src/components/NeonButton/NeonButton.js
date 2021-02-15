import {useEffect} from 'react';
import styles from './NeonButton.module.css';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

/*
Usage:
  <NeonButton text={"Boom Events"} href={"/events"} color={"#26a0da"}/>

  href: needs to be absolute path
*/

function NeonButton({text, href, color}) {

  useEffect(() =>{
    Aos.init({
      duration : 1000,
      delay : 300,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
      anchorPlacement : 'bottom-top'
      });
  }, []);

  return ( 
    <div data-aos="fade-up" className={styles.container}>
      <Link className={styles.a_n3} to={href} style={{"--color":color}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </Link>  
    </div>
  )
}

NeonButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired  
}

export default NeonButton

