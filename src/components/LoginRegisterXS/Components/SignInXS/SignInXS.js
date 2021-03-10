import React, { Component, useState, useContext, useEffect } from 'react';
import styles from "./SignInXS.module.css"
import NeonButton from "../../../NeonButton/NeonButton"
import { Link, useHistory } from "react-router-dom"
import { withRouter } from "react-router-dom"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { apiSignin, baseURL, url_gAuth } from "../../../../api/api"
import { AuthApi, SetAuthApi, Width } from "../../../../App"
import GoogleButton from 'react-google-button'
import Load from '../../../../components/Load/Load.js';



// this.textInput = React.createRef();

// componentDidMount() {
//     this.textInput.current.focus();
// }

toast.configure()
function SignInXS() {

    const _Width = useContext(Width)
    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const history = useHistory()

    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("")
    const [validationError, setvalidationError] = useState("")
    const [loading, setloading] = useState(false)

    // Refs
    let textInput = null;

    useEffect(() => {
        // textInput.current.focus();
        return () => {

        }
    }, [])

    const validate = () => {
        let validationError = '';

        if (!email) {
            validationError = 'Email field cannot be blank';
        }
        else {
            if (!email.includes('@')) {
                validationError = 'Invalid Email! Try a different one!';
            }
            else {
                if (!pwd) {
                    validationError = 'Password field cannot be blank';
                }
            }
        }

        if (validationError) {
            setvalidationError(validationError)
            return false;
        }
        return true;
    }

    const onSubmit = async (SetAuth) => {
        if (validate()) {
            setloading(true)
            const response = await apiSignin({ email: email, pwd: pwd })
            setloading(false)
            if (response.auth) {
                let obj = {
                    name: response.name,
                    abacusid: response.abacusid,
                    email: response.email,
                    phone: response.phone,
                    college: response.college,
                    dept: response.dept,
                    year: response.year
                }
                let obj_str = JSON.stringify(obj)
                Cookies.set("token", response.token)
                Cookies.set("details", obj_str)
                SetAuth(true)
                toast.success("Login Successful", {
                    position: toast.POSITION.BOTTOM_CENTER
                })
                history.push("/dashboard")
            }
            else {
                setvalidationError("Invalid Email/Password")
            }
        }
    }

    const giveFocus = () => {
        this.textInput.current.focus();
    }

    const clickGoogleIcon = () => {
        window.location = `${baseURL}${url_gAuth}`
    }

    return (
        <>
            {loading ? <Load /> :
            <div className={styles.login_form_wrapper}>
            <div className={styles.login_container}>
                <div className={styles.login_form_container}>
                    <input autoFocus className={styles.login_input_field} type="email" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                    <input className={styles.login_input_field} type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                </div>
                { validationError ? (<div className={styles.login_validation_output}>{validationError}</div>) : null}
                <Link to="/forgot-password"><div className={styles.forgot_password} >Forgot password?</div></Link>

                <NeonButton props={{ text: "Sign In", color: "#26a0da", onClick: onSubmit, parameters: SetAuth, credentials: { email: email, pwd: pwd } }} />
                <GoogleButton className={styles.google_button} onClick={clickGoogleIcon} type="dark" />
            </div>
        </div>

            }
        </>
    );
}

export default withRouter(SignInXS);