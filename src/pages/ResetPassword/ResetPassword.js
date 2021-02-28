import React, {Component, useState} from 'react';
import styles from "./ResetPassword.module.css"
import Heading from "../../components/Heading/Heading.js"
import NeonButton from "../../components/NeonButton/NeonButton.js"

const initialState = {
    email : '',
    pwd : '',
    cpwd : '',
    validationError : '',
}

export default class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.textInput = React.createRef();
    }

    validate = () => {
        let validationError = '';

        if(!this.state.email) {
            validationError = 'Email field cannot be blank';
        }
        else{
            if(!this.state.email.includes('@')) {
                validationError = 'Invalid Email! Try a different one!';
            }
            else{
                if(!this.state.pwd) {
                    validationError = 'Password field cannot be blank';
                }
                else{
                    if(!this.state.cpwd) {
                        validationError = 'Confirm Password field canot be blank'
                    }
                }
            }
        }

        if(!validationError && (this.state.cpwd !== this.state.pwd)) {
            validationError = 'Passwords do not match';
        }

        if(validationError) {
            this.setState({validationError});
            return false;
        }

        return true;
    }

    handleSubmit = () => {
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    }

    onSubmit = () => {
        this.handleSubmit();
        // apiCall();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }


    render() {
        return(
            <div className={styles.forgot_password_form_wrapper}>
                <div className={styles.forgot_password_container}>
                    <Heading text="Reset Password" fontSize="35px"></Heading>
                    <div className={styles.forgot_password_form_container}>
                        <input ref={this.textInput} className={styles.forgot_password_input_field} type="email" placeholder="Email" required value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
                        <input className={styles.forgot_password_input_field} type="password" placeholder="New Password" required value={this.state.pwd} onChange={(e) => this.setState({pwd : e.target.value})} />
                        <input className={styles.forgot_password_input_field} type="password" placeholder="Confirm New Password" required value={this.state.cpwd} onChange={(e) => this.setState({cpwd : e.target.value})}/>
                    </div>
                    {this.state.validationError ? (<div className={styles.forgot_password_validation_output}>{this.state.validationError}</div>) : null}
                    <NeonButton props={{ text: "Reset", color: "#26a0da", onClick: this.onSubmit, credentials: { email: this.state.email, pwd: this.state.pwd, cpwd: this.state.cpwd } }} />
                </div>
            </div>
        );
    }
}