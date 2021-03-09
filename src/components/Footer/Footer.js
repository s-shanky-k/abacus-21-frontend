import React, { Component } from 'react'
import styles from "./Footer.module.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
    render() {
        return (
            <div className={this.props.scroll_snap ? `${styles._footer_container_scroll_snap}` : `${styles._footer_container}`}>
                <div className={`${styles._footer_icons_div}`}>
                   <a href="https://instagram.com/csea_ceg?igshid=1ez05lkwkupnx" target="_blank"> <InstagramIcon className={`${styles._icon}` } /></a>
                    {/*<TwitterIcon className={`${styles._icon}`} />*/}
                    <a href="https://www.facebook.com/csea.ceg" target="_blank"><FacebookIcon className={`${styles._icon}`} /></a>
                    <a href="https://www.linkedin.com/company/abacus-cse" target="_blank"><LinkedInIcon className={`${styles._icon}`} /></a>
                </div>
                <div className={`${styles._footer_copyright_div}`}>
                    <p>CONTACT US</p>
                </div>  
                
              <div class="container-fluid align-items-center text-center">
                  <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-xs-1">
               
                <div class="col text-center pb-3"><a href="tel:+91 9500702003" target="_blank" className={`${styles.contact}`}> Pothikkannan G - <i class="fa fa-phone" aria-hidden="true"></i> 9500702083</a></div>
                <div class="col text-center pb-3"><a href="tel:+91 9626463345" target="_blank" className={`${styles.contact}`}> Raveena R - <i class="fa fa-phone" aria-hidden="true"></i> 9626463345</a></div>
                 <div class="col text-center pb-3"><a href="tel:+91 9626930040" target="_blank" className={`${styles.contact}`}> Sidharth Ganesh - <i class="fa fa-phone" aria-hidden="true"></i> 9626930040</a></div>
                   </div>   
                   </div>
                
                
                <div className={`${styles._footer_copyright_div}`}>
                    <p>&#169; 2021 Copyright ABACUS</p>
                </div>
            </div>
        )
    }
}

Footer.defaultProps = {
    scroll_snap: true,
};

