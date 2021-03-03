import {React, useState} from 'react'
import styles from './LoginRegisterXS.module.css'
import SignInXS from './Components/SignInXS/SignInXS'
import SignUpXS from './Components/SignUpXS/SignUpXS'
import NeonButton from '../../components/NeonButton/NeonButton'

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
                <div className={styles.toggleButton}><NeonButton props={{ text: "Login", color: "#26a0da", onClick: handleLoginClick }} /></div>
                <div className={styles.toggleButton}><NeonButton props={{ text: "Register", color: "#26a0da", onClick: handleRegisterClick }} /></div>
            </div>
            { login ? <SignInXS></SignInXS> : <SignUpXS></SignUpXS> }
        </div>
    )
}
