import React, { Component, useState, useContext } from 'react';
import styles from "./SignUpXS.module.css"
import NeonButton from "../../../NeonButton/NeonButton"
import { apiRegister, baseURL, url_gAuth } from "../../../../api/api";
import colleges from "../../../../assets/colleges.js"
import departments from "../../../../assets/departments.js"
import years from "../../../../assets/years.js"
import Select from "react-select";
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi, Width } from "../../../../App"
import { useHistory, withRouter } from 'react-router-dom';
import Load from '../../../../components/Load/Load.js';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import GoogleButton from 'react-google-button'

// this.textInput = React.createRef();

// componentDidMount() {
//     this.textInput.current.focus();
// }





toast.configure()
function SignUpXS() {

    // Ref
    let textInput = React.createRef();

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const _Width = useContext(Width)
    const history = useHistory()

    const customStyle1 = {
        menu: (provided, state) => ({
            ...provided,
            width: _Width < 1100 ? '70vw' : '30vw',
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: 'MainFont !important',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width < 1100 ? '70vw' : '30vw',
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont !important',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000 !important',
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
            width: _Width < 1100 ? '70vw' : '30vw',
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: 'MainFont !important',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
            marginLeft: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width < 1100 ? '70vw' : '30vw',
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont !important',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000 !important',
            margin: 20,
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
            width: _Width < 1100 ? '70vw' : '30vw',
            borderBottom: '1px solid #fff',
            color: state.isSelected ? '#ff65bd' : '#060c21',
            padding: 10,
            fontFamily: 'MainFont !important',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: _Width < 1100 ? '70vw' : '30vw',
            height: 50,
            display: 'flex',
            backgroundColor: '#fff',
            fontFamily: 'MainFont !important',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000 !important',
            marginBottom: 10,
            paddingLeft: 5,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }

    const [loading, setloading] = useState(false)
    const [name, setname] = useState('')
    const [year, setyear] = useState()
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
        else if (!dept) {
            validationError = 'Department field cannot be blank'
        }
        else if (!college) {
            validationError = 'College field cannot be blank'
        }
        else if (!year) {
            validationError = 'Year field cannot be blank'
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
            setloading(true)
            const response = await apiRegister({ name: name, year: year, dept: dept.value, college: college.value, email: email, phone: phone, pwd: pwd })
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
        <div id="goto-sign-up" className={styles.register_form_wrapper}>
            <div className={styles.register_container}>
                <div className={styles.register_form_container}>
                    <input autoFocus ref={textInput} className={styles.register_input_field} type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} required />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={years.map(opt => ({ label: opt, value: opt }))} onChange={handleYearChange} placeholder="Year" />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle2} options={departments.map(opt => ({ label: opt, value: opt }))} onChange={handleDeptChange} placeholder="Department" />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle3} options={colleges.map(opt => ({ label: opt, value: opt }))} onChange={handleCollegeChange} placeholder="College" />
                    <input className={styles.register_input_field} type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                    <input className={styles.register_input_field} type="email" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                    <input className={styles.register_input_field} type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                    <input className={styles.register_input_field} type="password" placeholder="Confirm Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
                </div>
                {validationError ? (<div className={styles.register_validation_output}>{validationError}</div>) : null}
                <GoogleButton label="Register with Google" className={styles.google_button} onClick={clickGoogleIcon} type="dark" />
                <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: onSubmit }} />
            </div>
        </div>
    );
}

export default withRouter(SignUpXS);