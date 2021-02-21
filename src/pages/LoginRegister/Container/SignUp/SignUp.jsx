import React from 'react';

const SignUp = ({ children }) => (
    <div className="form-container sign-up-container">
        <h1 className="login-register-heading">Sign Up Form</h1>
        <div className="form-class align-form">
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
        <button className="sign_up_btn">Sign Up</button>
    </div>
);

export default SignUp;
