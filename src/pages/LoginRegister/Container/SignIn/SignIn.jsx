import React from 'react';

const SignIn = ({ children }) => (
    <div className="form-container sign-in-container">
        <h1 className="login-register-heading">Sign In Form</h1>
        <div className="form-class">
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {/* <div></div> - Validation Output */}
        </div>
        <button className="sign_in_btn">Sign In</button>
    </div>
);

export default SignIn;