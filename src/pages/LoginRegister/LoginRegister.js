import React from 'react';
import './LoginRegister.css';
import Container from './Container/Container.jsx';
import NeonButton from "../../components/NeonButton/NeonButton.js";
import Heading from '../../components/Heading/Heading.js';

const LeftComponent = () => (
    <div>
        {/* <h1 className="login-register-heading">Greetings</h1> */}
        <Heading text="GREETINGS!" fontSize="35px"></Heading>
        <div id="signIn">
            <NeonButton props={{text:"Sign In", color:"#26a0da"}}/>
        </div>
    </div>
);

const RightComponent = () => (
    <div>
        {/* <h1 className="login-register-heading">Greetings</h1> */}
        <Heading text="GREETINGS!" fontSize="35px"></Heading>
        <div id="signUp">
            <NeonButton props={{text:"Sign Up", color:"#26a0da"}}/>
        </div>
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
