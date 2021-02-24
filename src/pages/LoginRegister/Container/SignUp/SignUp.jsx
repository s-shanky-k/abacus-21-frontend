import React, { useState } from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';
import { apiRegister } from "../../../../api/api";

const SignUp = ({ children }) => {

    const [name, setname] = useState('')
    const [year, setyear] = useState('')
    const [dept, setdept] = useState('')
    const [college, setcollege] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [pwd, setpwd] = useState('')
    const [cpwd, setcpwd] = useState('')

    return (
        <div className="form-container sign-up-container">
            {/* <h1 className="login-register-heading">Sign Up Form</h1> */}
            <Heading text="REGISTER" fontSize="35px"></Heading>
            <div className="form-class align-form" id="style-2">
                <input type="text" placeholder="Name" required value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder="Year" required value={year} onChange={(e) => setyear(e.target.value)} />
                <input type="text" placeholder="Department" required value={dept} onChange={(e) => setdept(e.target.value)} />
                <input type="text" placeholder="College" required value={college} onChange={(e) => setcollege(e.target.value)} />
                {/* <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required /> */}
                <input type="email" placeholder="Email-ID" required value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="number" placeholder="Phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                <input type="password" placeholder="Password" required value={pwd} onChange={(e) => setpwd(e.target.value)} />
                <input type="password" placeholder="Confirm Password" required value={cpwd} onChange={(e) => setcpwd(e.target.value)} />
            </div>
            {/* <div></div> - Validation Output */}
            <NeonButton props={{ text: "Sign Up", color: "#26a0da", onClick: apiRegister, credentials: { name: name, year: year, dept: dept, college: college, email: email, phone: phone, pwd: pwd, cpwd: cpwd } }} />
        </div>
    );
}

export default SignUp;
