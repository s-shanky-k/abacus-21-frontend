import React from 'react';
import Heading from '../../../../components/Heading/Heading.js';
import NeonButton from '../../../../components/NeonButton/NeonButton.js';

const SignIn = ({ children }) => (
    <div className="form-container sign-in-container">
        {/* <h1 className="login-register-heading">Sign In Form</h1> */}
        <Heading text="LOGIN" fontSize="35px"></Heading>
        <div className="form-class">
            {/* <div>
        	    <input class="effect-5" type="text" placeholder="Placeholder Text" />
                <span class="focus-border"></span>
            </div> */}
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {/* <div></div> - Validation Output */}
        </div>
        <a href=""><div className="forgot-password">Forgot password?</div></a>
        <NeonButton props={{text:"Sign In", href:"/events", color:"#26a0da"}}/>
    </div>
);

export default SignIn;