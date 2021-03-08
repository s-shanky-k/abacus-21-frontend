import React, { Component, useState } from 'react';
import styles from "./ForgotPassword.module.css"
import Heading from "../../components/Heading/Heading.js"
import NeonButton from "../../components/NeonButton/NeonButton.js"
import { useHistory, withRouter } from 'react-router-dom';
import { apiForgotPassword } from "../../api/api"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../../components/Footer/Footer"
import Load from '../../components/Load/Load';


// this.textInput = React.createRef();




// componentDidMount() {
//     this.textInput.current.focus();
// }

toast.configure()
function ForgotPassword(props) {

    const [email, setemail] = useState('')
    const [validationError, setvalidationError] = useState('')
    const history = useHistory()
    const [loading, setloading] = useState(false)

    const validate = () => {
        let validationError = '';

        if (!email) {
            validationError = 'Email field cannot be blank';
        }
        else {
            if (!email.includes('@')) {
                validationError = 'Invalid Email! Try a different one!';
            }
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
            setloading(true)
            const response = await apiForgotPassword({ email: email })
            setloading(false)

            if (response.status === 200) {
                toast.success(response.data.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                })
                history.push("/login-register")
            }
            else {
                toast.error(response.message, {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            }


        }
    }

    return (
        <>
            {loading ? <Load /> : <><div className={styles.forgot_password_form_wrapper}>
                <div className={styles.forgot_password_container}>
                    <Heading text="Forgot Password" fontSize="30px"></Heading>
                    <div className={styles.forgot_password_form_container}>
                        <input autoFocus className={styles.forgot_password_input_field} type="email" placeholder="Registered Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    {validationError ? (<div className={styles.forgot_password_validation_output}>{validationError}</div>) : null}
                    <NeonButton props={{ text: "Reset", color: "#26a0da", onClick: onSubmit }} />
                </div>
            </div>

                <Footer scroll_snap={false} /></>}


        </>
    );
}

export default withRouter(ForgotPassword)