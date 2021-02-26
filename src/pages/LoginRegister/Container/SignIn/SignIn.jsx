import React, { Component, useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiSignin } from "../../../../api/api";
import { Link } from "react-router-dom"

const url_signin = "ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/auth/signin";

const initialState = {
    email : '',
    pwd : '',
    emailError:'',
    pwdError:'',
}


// const SignIn = ({ children }) => {
//     const [email, setemail] = useState('')
//     const [pwd, setpwd] = useState('')
//     return (
//         <div className="form-container sign-in-container">
//             <Heading text="LOGIN" fontSize="35px"></Heading>
//             <div className="form-class">
//                 <input type="text" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
//                 <input type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
//                 {/* <div></div> - Validation Output */}
//             </div>
//             <Link href=""><div className="forgot-password">Forgot password?</div></Link>
//             <NeonButton props={{ text: "Sign In", color: "#26a0da", onClick: apiSignin, credentials: { email: email, pwd: pwd } }} />
//         </div>
//     )
// }

export default class SignIn extends Component{

    constructor(props) {
        super(props);
        this.state = initialState;
        this.textInput = React.createRef();
    }

    validate = () => {
        let emailError = "";

        if(!this.state.pwd) {
            emailError = 'Password field cannot be blank';
        }
        
        if(!this.state.email.includes('@')) {
            emailError = 'Invalid Email! Try a different one!';
        }

        if(!this.state.email) {
            emailError = 'Email field cannot be blank';
        }

        if(emailError) {
            this.setState({emailError});
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
        // apiSignin();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    giveFocus = () => {
        this.textInput.current.focus();
    }

    render() {
        return (
        <div className="form-container sign-in-container">
            <Heading text="LOGIN" fontSize="35px"></Heading>
            <div className="form-class">
                <input ref={this.textInput} type="text" placeholder="Email" required value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
                <input type="password" placeholder="Password" required value={this.state.pwd} onChange={(e) => this.setState({pwd : e.target.value})} />
            </div>
            {this.state.emailError ? (<div className="validation-output">{this.state.emailError}</div>) : null}
            {this.state.pwdError ? (<div className="validation-output">{this.state.pwdError}</div>) : null}
            <Link href=""><div className="forgot-password">Forgot password?</div></Link>
            <NeonButton props={{ text: "Sign In", color: "#26a0da", onClick: this.onSubmit, credentials: { email: this.state.email, pwd: this.state.pwd } }} />
        </div>
    )
    }
}

// export default SignIn;