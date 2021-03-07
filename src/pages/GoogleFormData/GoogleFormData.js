import { React, useState, useContext, useEffect } from 'react'
import styles from "./GoogleFormData.module.css"
import Heading from "../../components/Heading/Heading"
import NeonButton from "../../components/NeonButton/NeonButton.js"
import Select from "react-select";
import colleges from "../../assets/colleges"
import departments from "../../assets/departments"
import years from "../../assets/years"
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi, Width } from "../../App"
import { useHistory, withRouter } from 'react-router-dom';
import { apiGoogleDataForm } from "../../api/api"


function GoogleFormData(props) {

    // Ref
    // let textInput = React.createRef();

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const history = useHistory()
    const _Width = useContext(Width)

    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [year, setyear] = useState(null)
    const [dept, setdept] = useState(null)
    const [college, setcollege] = useState(null)
    const [phone, setphone] = useState(null)
    const [queryParams, setqueryParams] = useState({})
    const [validationError, setvalidationError] = useState('')


    useEffect(() => {
        let queryString = require('query-string')
        let params = queryString.parse(props.location.search)
        setqueryParams({
            "auth": params.auth,
            "email": params.email,
            "name": params.name,
            "token": params.token
        })
        setname(params.name);
        setemail(params.email);
    }, [])

    const giveFocus = () => {
        this.textInput.current.focus();
    }

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
            color: '#000',
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
            fontFamily: 'MainFont',
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
            fontFamily: 'MainFont',
            fontSize: 20,
            borderRadius: 10,
            alignItems: 'center',
            color: '#000',
            paddingLeft: 5,
            margin: 25,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }   
    

    const validate = () => {
        let validationError = '';

        if (!name) {
            validationError = 'Name field cannot be blank';
        }
        else if (!year) {
            validationError = 'Year field cannot be blank';
        }
        else if (!dept) {
            validationError = 'Department field cannot be blank';
        }
        else if(!college) {
            validationError = 'College field cannot be blank'
        }
        else if(!phone) {
            validationError = 'Phone field cannot be blank';
        }
        else if (phone < 1000000000 || phone > 9999999999) {
            validationError = 'Invalid Phone Number';
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
            const response = await apiGoogleDataForm({
                name: name,
                year: year,
                dept: dept.value,
                college: college.value,
                phone: phone,
                token: queryParams.token
            })
            if (response.auth) {
                Cookies.set("token", response.token)
                SetAuth(true)
                history.push("/dashboard")
            }
            else {
                setvalidationError(response.message)
            }
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

    return (
        <div className={styles.google_form_data_form_wrapper}>
            <div className={styles.google_form_data_container}>
                <Heading text="Register" fontSize="35px"></Heading>
                <div className={styles.google_form_data_form_container}>
                    <input className={styles.google_form_data_input_field} type="email" placeholder="Email" disabled value={email} />
                    <input className={styles.google_form_data_input_field} type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)} />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={years.map(opt => ({ label: opt, value: opt }))} onChange={handleYearChange} placeholder="Year" />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle2} options={departments.map(opt => ({ label: opt, value: opt }))} onChange={handleDeptChange} placeholder="Department" />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={colleges.map(opt => ({ label: opt, value: opt }))} onChange={handleCollegeChange} placeholder="College" />
                    <input className={styles.google_form_data_input_field} type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                </div>
                {validationError ? (<div className={styles.google_form_data_validation_output}>{validationError}</div>) : null}
                <NeonButton props={{ text: "Submit", color: "#26a0da", onClick: onSubmit }} />
            </div>
        </div>
    )
}

export default withRouter(GoogleFormData);