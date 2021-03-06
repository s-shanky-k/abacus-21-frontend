import React, { useState, useEffect } from 'react';
import styles from "./ResetPassword.module.css"
import Heading from "../../components/Heading/Heading.js"
import NeonButton from "../../components/NeonButton/NeonButton.js"
import { apiResetPassword } from "../../api/api"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


toast.configure()



// this.textInput = React.createRef();

function ResetPassword(props) {

    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    const [cpwd, setcpwd] = useState('')
    const [validationError, setvalidationError] = useState('')
    const [queryParams, setqueryParams] = useState({})

    const history = useHistory()

    useEffect(() => {
        let queryString = require('query-string')
        let params = queryString.parse(props.location.search)
        setqueryParams({
            "email": params.email,
            "user": params.user,
            "key": params.key
        })
        setemail(params.email);
        return () => {

        }
    }, [])


    const validate = () => {
        let validationError = '';


        if (!pwd) {
            validationError = 'Password field cannot be blank';
        }
        else if (!cpwd) {
            validationError = 'Confirm Password field canot be blank'
        }

        if (!validationError && (cpwd !== pwd)) {
            validationError = 'Passwords do not match';
        }

        if (validationError) {
            setvalidationError(validationError);
            return false;
        }

        return true;
    }


    const onSubmit = async () => {
        const isValid = validate();
        if (isValid) {
            const response = await apiResetPassword({
                "pwd": pwd,
                "user": queryParams.user,
                "key": queryParams.key
            })
            toast.success("Reset Password Successful", {
                position: toast.POSITION.BOTTOM_LEFT
            })
            history.push("/login-register")
        }
    }


    return (
        <div className={styles.forgot_password_form_wrapper}>
            <div className={styles.forgot_password_container}>
                <Heading text="Reset Password" fontSize="35px"></Heading>
                <div className={styles.forgot_password_form_container}>
                    <input className={styles.forgot_password_input_field} type="email" placeholder="Email" disabled value={email} />
                    <input className={styles.forgot_password_input_field} type="password" placeholder="New Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                    <input className={styles.forgot_password_input_field} type="password" placeholder="Confirm New Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
                </div>
                {validationError ? (<div className={styles.forgot_password_validation_output}>{validationError}</div>) : null}
                <NeonButton props={{ text: "Reset", color: "#26a0da", onClick: onSubmit }} />
            </div>
        </div>
    );
}

export default ResetPassword
