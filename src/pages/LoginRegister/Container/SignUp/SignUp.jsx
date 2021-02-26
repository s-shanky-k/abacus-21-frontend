import React, { Component, useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import Select from 'react-select';
import { apiRegister } from "../../../../api/api";
import colleges from "../../../../assets/colleges.js"
import departments from "../../../../assets/departments.js"

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
    validationError : '',
}

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

// const college = colleges.map(opt => ({ label: opt, value: opt }));

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
        let validationError = '';

        if(!this.state.name) {
            validationError = 'Name field cannot be blank';
        } else {
            if(!this.state.email) {
                validationError = 'Email field cannot be blank';
            }
            else{
                if(!this.state.email.includes('@')) {
                    validationError = 'Invalid Email! Try a different one!';
                }
                else{
                    if(!this.state.phone) {
                        validationError = 'Phone field cannot be blank';
                    }
                    else{
                        if(this.state.phone<1000000000 || this.state.phone>9999999999) {
                            validationError = 'Invalid Phone Number';
                        }
                        else{
                            if(!this.state.pwd) {
                                validationError = 'Password field cannot be blank';
                            }
                            else{
                                if(!this.state.cpwd) {
                                    validationError = 'Confirm Password field cannot be blank';
                                }
                            }
                        }
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
                    {/* <input type="text" placeholder="Department" required value={this.state.dept} onChange={(e) => this.setState({dept : e.target.value})} /> */}
                    {/* <input type="text" placeholder="College" required value={this.state.college} onChange={(e) => this.setState({college : e.target.value})} /> */}
                    {/* <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required /> */}
                    <Select styles={{ singleValue: (base) => ({ ...base, background: this.state.selectedOption.value, backgroundColor: 'black', border: 'none', margin: '8px 0', width: '100%', fontFamily: 'MainFont', height: '50', fontSize: '20', color: 'white', borderRadius: '20px'}) }} options={departments.map(opt => ({ label: opt, value: opt }))} placeholder="Department"/>
                    {/* <Select styles={customStyles} options={departments.map(opt => ({ label: opt, value: opt }))} placeholder="Department"/> */}
                    <Select styles={{ singleValue: (base) => ({ ...base, background: this.state.selectedOption.value, backgroundColor: 'black', border: 'none', margin: '8px 0', width: '100%', fontFamily: 'MainFont', height: '50', fontSize: '20', color: 'white', borderRadius: '20px'}) }} options={colleges.map(opt => ({ label: opt, value: opt }))} placeholder="College"/>
                    <input type="email" placeholder="Email-ID" required value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
                    <input type="number" placeholder="Phone" required value={this.state.phone} onChange={(e) => this.setState({phone : e.target.value})} />
                    <input type="password" placeholder="Password" required value={this.state.pwd} onChange={(e) => this.setState({pwd : e.target.value})} />
                    <input type="password" placeholder="Confirm Password" required value={this.state.cpwd} onChange={(e) => this.setState({cpwd : e.target.value})} />
                </div>
                {this.state.validationError ? (<div className="validation-output">{this.state.validationError}</div>) : null}
                <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: this.onSubmit, credentials: { name: this.state.name, year: this.state.year, dept: this.state.dept, college: this.state.college, email: this.state.email, phone: this.state.phone, pwd: this.state.pwd, cpwd: this.state.cpwd } }} />
            </div>    
        );
    }
}

// export default SignUp;