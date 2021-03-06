import React, { Component, useContext, useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiRegister, baseURL, url_gAuth } from "../../../../api/api";
import colleges from "../../../../assets/colleges.js"
import departments from "../../../../assets/departments.js"
import years from "../../../../assets/years.js"
import Select from "react-select";
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi, Width } from "../../../../App"
import { useHistory, withRouter } from 'react-router-dom';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import GoogleButton from 'react-google-button'


// const cusStyle = {
//     width: 465,
//     height: 50,
//     display: 'flex',
//     backgroundColor: '#000',
//     fontFamily: 'MainFont',
//     fontSize: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     color: '#fff',
//     marginBottom: 20,
//     marginTop: 10,
//     paddingLeft: 5,
// }




toast.configure()
function SignUp() {

    // Ref
    let textInput = React.createRef();

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const _Width = useContext(Width)
    const history = useHistory()

    const customStyle1 = {
        menu: (provided, state) => ({
            ...provided,
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: 'MainFont',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000',
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
        menu: (provided, state) => ({
            ...provided,
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: 'MainFont',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 5,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }   
    
    const customStyle3 = {
        menu: (provided, state) => ({
            ...provided,
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: '3ainFont',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width>1300 ? '30vw' : ( _Width > 1200 ? '29vw' : '28.5vw'),
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000',
            marginBottom: 10,
            paddingLeft: 5,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }   

    const [name, setname] = useState('')
    const [year, setyear] = useState(null)
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

    const handleYearChange = (selectedOption) => {
        setyear(selectedOption.value);
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
                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={years.map(opt => ({ label: opt, value: opt }))} onChange={handleYearChange} placeholder="Year" />
                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle2} options={departments.map(opt => ({ label: opt, value: opt }))} onChange={handleDeptChange} placeholder="Department" />
                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle3} options={colleges.map(opt => ({ label: opt, value: opt }))} onChange={handleCollegeChange} placeholder="College" />
                <input className="input-field-style" type="email" placeholder="Email-ID" required value={email} onChange={(e) => setemail(e.target.value)} />
                <input className="input-field-style" type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                <input className="input-field-style" type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                <input className="input-field-style" type="password" placeholder="Confirm Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
            </div>
            {validationError ? (<div className="validation-output">{validationError}</div>) : null}
            <GoogleButton label="Register with Google" className="google-button" onClick={clickGoogleIcon} type="dark" />
            <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: onSubmit }} />
        </div>
    );
}


export default withRouter(SignUp);