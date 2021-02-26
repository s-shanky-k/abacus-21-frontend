import React, { Component } from 'react';
import './LoginRegister.css';
import Container from './Container/Container.jsx';
import NeonButton from "../../components/NeonButton/NeonButton.js";
import Heading from '../../components/Heading/Heading.js';
import SignUp from './Container/SignUp/SignUp.jsx';
import SignIn from './Container/SignIn/SignIn.jsx';

class LeftComponent extends Component {
    static SignIn = SignIn;
    render() {
        return(
            <div>
                {/* <h1 className="login-register-heading">Greetings</h1> */}
                <Heading text="GREETINGS!" fontSize="35px"></Heading>
                <div id="signIn">
                    <NeonButton props={{text:"Sign In", color:"#26a0da", onClick:SignIn.giveFocus}}/>
                </div>
            </div>
        );
    }
}

// const LeftComponent = () => (
//     <div>
//         {/* <h1 className="login-register-heading">Greetings</h1> */}
//         <Heading text="GREETINGS!" fontSize="35px"></Heading>
//         <div id="signIn">
//             <NeonButton props={{text:"Sign In", color:"#26a0da"}}/>
//         </div>
//     </div>
// );

class RightComponent extends Component {
    static SignUp = SignUp;
    render() {
        return(
            <div>
                {/* <h1 className="login-register-heading">Greetings</h1> */}
                <Heading text="GREETINGS!" fontSize="35px"></Heading>
                <div id="signUp">
                    <NeonButton props={{text:"Sign Up", color:"#26a0da", onClick:SignUp.giveFocus}}/>
                </div>
            </div>
        );
    }
}

// const RightComponent = () => (
//     <div>
//         {/* <h1 className="login-register-heading">Greetings</h1> */}
//         <Heading text="GREETINGS!" fontSize="35px"></Heading>
//         <div id="signUp">
//             <NeonButton props={{text:"Sign Up", color:"#26a0da"}}/>
//         </div>
//     </div>
// );

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
