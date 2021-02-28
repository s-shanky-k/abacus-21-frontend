import {React, useState, useContext} from 'react'
import styles from "./GoogleFormData.module.css"
import Heading from "../../components/Heading/Heading"
import NeonButton from "../../components/NeonButton/NeonButton.js"
import Select from "react-select";
import colleges from "../../assets/colleges"
import departments from "../../assets/departments"
import Cookies from "js-cookie"
import { AuthApi, SetAuthApi } from "../../App"
import { useHistory, withRouter } from 'react-router-dom';
import {apiGoogleDataForm} from "../../api/api"


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

function GoogleFormData() {

    // Ref
    // let textInput = React.createRef();

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const history = useHistory()

    const [name, setname] = useState('')
    const [year, setyear] = useState(1)
    const [dept, setdept] = useState(null)
    const [college, setcollege] = useState(null)
    const [phone, setphone] = useState('')
    const [validationError, setvalidationError] = useState('')

    const giveFocus = () => {
        this.textInput.current.focus();
    }

    const validate = () => {
        let validationError = '';

        if (!name) {
            validationError = 'Name field cannot be blank';
        } 
        else {
            if (!phone) {
                validationError = 'Phone field cannot be blank';
            }
            else {
                if (phone < 1000000000 || phone > 9999999999) {
                    validationError = 'Invalid Phone Number';
                }
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
        const response = await apiGoogleDataForm({ name: name, year: year, dept: dept.value, college: college.value, phone: phone })
        if (response.auth) {
            Cookies.set("token", response.token)
            SetAuth(true)
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
    
    return (
        <div className={styles.google_form_data_form_wrapper}>
            <div className={styles.google_form_data_container}>
                <Heading text="Register" fontSize="35px"></Heading>
                <div className={styles.google_form_data_form_container}>
                    <input className={styles.google_form_data_input_field} type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)} />
                    <input className={styles.google_form_data_input_field} type="text" placeholder="Year" required value={year} onChange={(e) => setyear(e.target.value)} />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle1} options={departments.map(opt => ({ label: opt, value: opt }))} onChange={handleDeptChange} placeholder="Department" />
                    <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} styles={customStyle2} options={colleges.map(opt => ({ label: opt, value: opt }))} onChange={handleCollegeChange} placeholder="College" />
                    <input className={styles.google_form_data_input_field} type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                </div>
                {validationError ? (<div className={styles.google_form_data_validation_output}>{validationError}</div>) : null}
                <NeonButton props={{ text: "Reset", color: "#26a0da", onClick: onSubmit}} />
            </div>
        </div>
    )
}

export default withRouter(GoogleFormData);