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
                    <p>&#169; 2021 Copyright ABACUS</p>
                </div>
            </div>
        )
    }
}

Footer.defaultProps = {
    scroll_snap: true,
};

