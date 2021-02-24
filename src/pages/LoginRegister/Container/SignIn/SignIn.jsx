import React, { useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiSignin } from "../../../../api/api";
import { Link } from "react-router-dom"

const url_signin = "ec2-3-16-135-186.us-east-2.compute.amazonaws.com:3000/auth/signin"



const SignIn = ({ children }) => {
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    return (
        <div className="form-container sign-in-container">
            <Heading text="LOGIN" fontSize="35px"></Heading>
            <div className="form-class">
                <input type="text" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                {/* <div></div> - Validation Output */}
            </div>
            <Link href=""><div className="forgot-password">Forgot password?</div></Link>
            <NeonButton props={{ text: "Sign In", color: "#26a0da", onClick: apiSignin, credentials: { email: email, pwd: pwd } }} />
        </div>
    )
}

export default SignIn;