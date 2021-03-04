import {React, useState} from 'react'
import styles from './LoginRegisterXS.module.css'
import SignInXS from './Components/SignInXS/SignInXS'
import SignUpXS from './Components/SignUpXS/SignUpXS'
import Heading from '../Heading/Heading'
import Heading1 from '../Heading1/Heading1'

export default function LoginRegisterXS() {

    const [login, setlogin] = useState(true);
    const [register, setregister] = useState(false);

    function handleLoginClick() {
        setlogin(true);
        setregister(false);   
    }

    function handleRegisterClick() {
        setlogin(false);
        setregister(true);   
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.toggleDiv}>
                {login ? <div className={styles.toggleButton} onClick={handleLoginClick}><Heading text="LOGIN" fontSize="35px" /></div> : <div className={styles.toggleButton} onClick={handleLoginClick}><Heading1 text="LOGIN" fontSize="35px" /></div>}
                {register ? <div className={styles.toggleButton} onClick={handleRegisterClick}><Heading text="REGISTER" fontSize="35px" /></div> : <div className={styles.toggleButton} onClick={handleRegisterClick}><Heading1 text="REGISTER" fontSize="35px" /></div>}
            </div>
            { login ? <SignInXS></SignInXS> : <SignUpXS></SignUpXS> }
        </div>
    )
}
