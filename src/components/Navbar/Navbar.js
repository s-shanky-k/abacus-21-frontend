import React, { useContext } from 'react'

import NavbarBig from '../NavbarBig/NavbarBig';
import NavbarSmall from '../NavbarSmall/NavbarSmall';

import { useHistory, withRouter } from 'react-router-dom'
import { SetAuthApi } from "../../App"
import { AuthApi } from "../../App"
import Cookies from "js-cookie"

function Navbar({ width }) {

    const SetAuth = useContext(SetAuthApi)
    const Auth = useContext(AuthApi)
    const history = useHistory()

    const logout = () => {
        if (Auth) {
            if (Cookies.get("token")) {
                Cookies.remove("token")
            }
            SetAuth(false)
            history.push({
                pathname:"/homepage",
                state:{
                    snackbar_message:"You have been logged out!",
                }
            })
        }
    }

    return (
        <>
            { width < 808 ? (<NavbarSmall clickLogout={logout} />) : (<NavbarBig clickLogout={logout} />)}
        </>
    )

}

export default withRouter(Navbar)
