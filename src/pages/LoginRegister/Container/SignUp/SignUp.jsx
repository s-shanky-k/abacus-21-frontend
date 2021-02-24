import React from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';

const SignUp = ({ children }) => (
    <div className="form-container sign-up-container">
        {/* <h1 className="login-register-heading">Sign Up Form</h1> */}
        <Heading text="REGISTER" fontSize="35px"></Heading>
        <div className="form-class align-form" id="style-2">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Year" required />
            <input type="text" placeholder="Department" required />
            <input type="text" placeholder="College" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
            <input type="email" placeholder="Email-ID" required />
            <input type="number" placeholder="Phone" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
        </div>
        {/* <div></div> - Validation Output */}
        <NeonButton props={{text:"Sign Up", href:"/events", color:"#26a0da"}}/>
    </div>
);

export default SignUp;
