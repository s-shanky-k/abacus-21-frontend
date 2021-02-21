import React from 'react';
import './LoginRegister.css';
import Container from './Container/Container.jsx';

const LeftComponent = () => (
    <div>
        <h1 className="login-register-heading">Greetings</h1>
        <button id="signIn" type="button">
            Sign In
        </button>
    </div>
);

const RightComponent = () => (
    <div>
        <h1 className="login-register-heading">Greetings</h1>
        <button id="signUp" type="button">
            Sign Up
        </button>
    </div>
);

const App = () => {
    return (
        <div className="Login-Register-App">
            <Container>
                <Container.SignIn />
                <Container.SignUp />
                <Container.Overlay>
                    <Container.Overlay.Left>
                        <LeftComponent />
                    </Container.Overlay.Left>
                    <Container.Overlay.Right>
                        <RightComponent />
                    </Container.Overlay.Right>
                </Container.Overlay>
            </Container>
        </div>
    );
};

export default App;
