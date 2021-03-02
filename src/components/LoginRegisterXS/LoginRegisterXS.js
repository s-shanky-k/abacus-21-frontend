import React from 'react'
import styles from './LoginRegisterXS.module.css'
import SignInXS from './Components/SignInXS/SignInXS'
import SignUpXS from './Components/SignUpXS/SignUpXS'

export default function LoginRegisterXS() {
    return (
        <div>
            <SignInXS></SignInXS>
            <SignUpXS></SignUpXS>
        </div>
    )
}
