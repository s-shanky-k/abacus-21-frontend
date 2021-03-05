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
                    <InstagramIcon className={`${styles._icon}`} />
                    <TwitterIcon className={`${styles._icon}`} />
                    <FacebookIcon className={`${styles._icon}`} />
                    <LinkedInIcon className={`${styles._icon}`} />
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

