import React, { Component, useContext, useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiRegister, baseURL, url_gAuth } from "../../../../api/api";
import colleges from "../../../../assets/colleges.js"
import departments from "../../../../assets/departments.js"
import Select from "react-select";
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi } from "../../../../App"
import { useHistory, withRouter } from 'react-router-dom';

import { css } from "glamor"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import GoogleButton from 'react-google-button'


const customStyle1 = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid #fff',
        color: state.isSelected ? '#ff65bd' : '#060c21',
        padding: 10,
        fontFamily: 'MainFont',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 450,
        height: 50,
        display: 'flex',
        backgroundColor: 'black',
        fontFamily: 'MainFont',
        fontSize: 20,
        borderRadius: 20,
        alignItems: 'center',
        color: '#fff',
        marginBottom: 20,
        marginTop: 10,
        paddingLeft: 5,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const customStyle2 = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid #fff',
        color: state.isSelected ? '#ff65bd' : '#060c21',
        padding: 10,
        fontFamily: 'MainFont',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 450,
        height: 50,
        display: 'flex',
        backgroundColor: 'black',
        fontFamily: 'MainFont',
        fontSize: 20,
        borderRadius: 20,
        alignItems: 'center',
        color: 'red',
        marginBottom: 10,
        paddingLeft: 5,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const dropdownIndicatorStyles = (base, state) => {
    let changes = {
        // all your override styles
        backgroundColor: 'blue',
    };
    return Object.assign(base, changes);
};







// this.textInput = React.createRef();

// componentDidMount() {
//     this.textInput.current.focus();
// }


toast.configure()
function SignUp() {

    // Ref
    let textInput = React.createRef();

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const history = useHistory()

    const [name, setname] = useState('')
    const [year, setyear] = useState(1)
    const [dept, setdept] = useState(null)
    const [college, setcollege] = useState(null)
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [pwd, setpwd] = useState('')
    const [cpwd, setcpwd] = useState('')
    const [validationError, setvalidationError] = useState('')

    const giveFocus = () => {
        this.textInput.current.focus();
    }

    const validate = () => {
        let validationError = '';

        if (!name) {
            validationError = 'Name field cannot be blank';
        } else if (!email) {
            validationError = 'Email field cannot be blank';
        }
        else if (!email.includes('@')) {
            validationError = 'Invalid Email! Try a different one!';
        }
        else if (!phone) {
            validationError = 'Phone field cannot be blank';
        }
        else if (phone < 1000000000 || phone > 9999999999) {
            validationError = 'Invalid Phone Number';
        }
        else if (!pwd) {
            validationError = 'Password field cannot be blank';
        }
        else if (!cpwd) {
            validationError = 'Confirm Password field cannot be blank';
        }
        else if (!dept) {
            validationError = 'Department field cannot be blank'
        }
        else if (!college) {
            validationError = 'College field cannot be blank'
        }
        else if (!year) {
            validationError = 'Year field cannot be blank'
        }
        else if (!(year <= 5 && year >= 1)) {
            validationError = 'Choose valid academic year'
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
            const response = await apiRegister({ name: name, year: year, dept: dept.value, college: college.value, email: email, phone: phone, pwd: pwd })
            if (response.auth) {
                Cookies.set("token", response.token)
                SetAuth(true)
                toast.success("Registration Successfull", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
                history.push("/dashboard")
            }
            else {
                setvalidationError(response.message)
            }
            // api


        }
    }

    const handleDeptChange = (selectedOption) => {
        setdept(selectedOption)
    }

    const handleCollegeChange = (selectedOption) => {
        setcollege(selectedOption);
    }

    const clickGoogleIcon = () => {
        window.location = `${baseURL}${url_gAuth}`
        // history.push()
    }


    return (
        <div className="form-container sign-up-container">
            <Heading text="REGISTER" fontSize="35px"></Heading>
            <div className="form-class align-form" id="style-2">
                <input className="input-field-style" ref={textInput} type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)} />
                <input className="input-field-style" type="text" placeholder="Year" required value={year} onChange={(e) => setyear(e.target.value)} />

                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={departments.map(opt => ({ label: opt, value: opt }))} onChange={handleDeptChange} placeholder="Department" />
                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle2} options={colleges.map(opt => ({ label: opt, value: opt }))} onChange={handleCollegeChange} placeholder="College" />
                <input className="input-field-style" type="email" placeholder="Email-ID" required value={email} onChange={(e) => setemail(e.target.value)} />
                <input className="input-field-style" type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                <input className="input-field-style" type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                <input className="input-field-style" type="password" placeholder="Confirm Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
            </div>
            {validationError ? (<div className="validation-output">{validationError}</div>) : null}
            <GoogleButton className="google-button" onClick={clickGoogleIcon} type="dark" />
            <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: onSubmit }} />
        </div>
    );
}


export default withRouter(SignUp);