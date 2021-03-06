import React, { useState, useEffect, useContext, useRef } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { Link, useHistory } from "react-router-dom"
import { apiSignin, baseURL, url_gAuth } from "../../../../api/api"
import { withRouter } from "react-router-dom"
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi, Width } from "../../../../App"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import GoogleButton from 'react-google-button'
import Load from '../../../../components/Load/Load.js';


toast.configure()
function SignIn(props) {

    const _Width = useContext(Width)
    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const history = useHistory()

    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("")
    const [validationError, setvalidationError] = useState("")
    const [loading, setloading] = useState(false)

    useEffect(() => {
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

    const clickGoogleIcon = () => {
        window.location = `${baseURL}${url_gAuth}`
    }

    return (
        <>
            {loading ? <Load /> : <div className="form-container sign-in-container" >
                <Heading text="LOGIN" fontSize="35px"></Heading>
                <div className="form-class">
                    <input autoFocus className="input-field-style"  type="text" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                    <input className="input-field-style" type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                </div>
                {validationError ? (<div className="validation-output">{validationError}</div>) : null
                }
                <Link className="forgot-password" to="/forgot-password">Forgot password?</Link>

                <NeonButton props={{ text: "Sign In", color: "#26a0da", onClick: onSubmit, parameters: SetAuth, credentials: { email: email, pwd: pwd } }} />
                <GoogleButton className="google-button" onClick={clickGoogleIcon} type="dark" />

            </div>}
        </>

    )
}

export default withRouter(SignIn);