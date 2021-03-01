import React, { useContext } from 'react'

import NavbarBig from '../NavbarBig/NavbarBig';
import NavbarSmall from '../NavbarSmall/NavbarSmall';

import { useHistory, withRouter } from 'react-router-dom'
import { SetAuthApi } from "../../App"
import { AuthApi } from "../../App"
import Cookies from "js-cookie"

import { css } from "glamor"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
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
            toast.success("Logged Out Successfully", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            history.push("/homepage")
        }
    }

    return (
        <>
            { width < 808 ? (<NavbarSmall clickLogout={logout} />) : (<NavbarBig clickLogout={logout} />)}
        </>
    )

}

export default withRouter(Navbar)
