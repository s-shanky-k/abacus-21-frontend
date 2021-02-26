import React, { Component, useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiRegister } from "../../../../api/api";

// const SignUp = ({ children }) => {

//     const [name, setname] = useState('')
//     const [year, setyear] = useState('')
//     const [dept, setdept] = useState('')
//     const [college, setcollege] = useState('')
//     const [email, setemail] = useState('')
//     const [phone, setphone] = useState('')
//     const [pwd, setpwd] = useState('')
//     const [cpwd, setcpwd] = useState('')

//     return (
//         <div className="form-container sign-up-container">
//             {/* <h1 className="login-register-heading">Sign Up Form</h1> */}
//             <Heading text="REGISTER" fontSize="35px"></Heading>
//             <div className="form-class align-form" id="style-2">
//                 <input type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)} />
//                 <input type="text" placeholder="Year" required value={year} onChange={(e) => setyear(e.target.value)} />
//                 <input type="text" placeholder="Department" required value={dept} onChange={(e) => setdept(e.target.value)} />
//                 <input type="text" placeholder="College" required value={college} onChange={(e) => setcollege(e.target.value)} />
//                 {/* <input type="text" placeholder="City" required />
//                 <input type="text" placeholder="State" required /> */}
//                 <input type="email" placeholder="Email-ID" required value={email} onChange={(e) => setemail(e.target.value)} />
//                 <input type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
//                 <input type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
//                 <input type="password" placeholder="Confirm Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
//             </div>
//             {/* <div></div> - Validation Output */}
//             <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: apiRegister, credentials: { name: name, year: year, dept: dept, college: college, email: email, phone: phone, pwd: pwd, cpwd: cpwd } }} />
//         </div>
//     );
// }

const initialState = {
    name : '',
    year : '',
    dept : '',
    college : '',
    email : '',
    phone : '',
    pwd : '',
    cpwd : '',
    nameError : '',
    emailError : '',
    phoneError : '',
    pwdError : '',
    cpwdError : '',
}

export default class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = initialState;
        this.textInput = React.createRef();
    }

    // componentDidMount() {
    //     this.textInput.current.focus();
    // }

    giveFocus() {
        this.textInput.current.focus();
    }

    handleSubmit = () => {
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    }

    validate = () => {
        let nameError = '';
        let emailError = '';
        let phoneError = '';
        let pwdError = '';
        let cpwdError = '';

        if(!this.state.name) {
            nameError = 'Name field cannot be blank';
        }
        
        if(!this.state.email.includes('@')) {
            emailError = 'Invalid Email! Try a different one!';
        }

        if(!this.state.email) {
            emailError = 'Email field cannot be blank';
        }

        if(!this.state.phoneError) {
            phoneError = 'Phone field cannot be blank';
        }

        if(!this.state.pwdError) {
            pwdError = 'Password field cannot be blank';
        }

        if(!this.state.cpwdError) {
            cpwdError = 'Confirm Password field cannot be blank';
        }

        if(nameError) {
            this.setState({nameError});
            return false;
        }

        if(emailError) {
            this.setState({emailError});
            return false;
        }

        if(phoneError) {
            this.setState({phoneError});
            return false;
        }

        if(pwdError) {
            this.setState({pwdError});
            return false;
        }

        if(cpwdError) {
            this.setState({cpwdError});
            return false;
        }

        return true;
    }

    onSubmit = () => {
        this.handleSubmit();
        // apiSignin();
    }

    render() {
        return (
            <div className="form-container sign-up-container">
                {/* <h1 className="login-register-heading">Sign Up Form</h1> */}
                <Heading text="REGISTER" fontSize="35px"></Heading>
                <div className="form-class align-form" id="style-2">
                    <input ref={this.textInput} type="text" placeholder="Name" required value={this.state.name} onChange={(e) => this.setState({name : e.target.value})} />
                    <input type="text" placeholder="Year" required value={this.state.year} onChange={(e) => this.setState({year : e.target.value})} />
                    <input type="text" placeholder="Department" required value={this.state.dept} onChange={(e) => this.setState({dept : e.target.value})} />
                    <input type="text" placeholder="College" required value={this.state.college} onChange={(e) => this.setState({college : e.target.value})} />
                    {/* <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required /> */}
                    <input type="email" placeholder="Email-ID" required value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
                    <input type="number" placeholder="Phone" required value={this.state.phone} onChange={(e) => this.setState({phone : e.target.value})} />
                    <input type="password" placeholder="Password" required value={this.state.pwd} onChange={(e) => this.setState({pwd : e.target.value})} />
                    <input type="password" placeholder="Confirm Password" required value={this.state.cpwd} onChange={(e) => this.setState({cpwd : e.target.value})} />
                </div>
                {this.state.nameError ? (<div className="validation-output">{this.state.nameError}</div>) : null}
                {this.state.emailError ? (<div className="validation-output">{this.state.emailError}</div>) : null}
                {this.state.phoneError ? (<div className="validation-output">{this.state.phoneError}</div>) : null}
                {this.state.pwdError ? (<div className="validation-output">{this.state.pwdError}</div>) : null}
                {this.state.cpwdError ? (<div className="validation-output">{this.state.cpwdError}</div>) : null}
                <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: this.onSubmit, credentials: { name: this.state.name, year: this.state.year, dept: this.state.dept, college: this.state.college, email: this.state.email, phone: this.state.phone, pwd: this.state.pwd, cpwd: this.state.cpwd } }} />
            </div>    
        );
    }
}

// export default SignUp;