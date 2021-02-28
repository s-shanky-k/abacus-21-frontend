import React, { Component, useRef, useEffect } from 'react';
import './LoginRegister.css';
import Container from './Container/Container.jsx';
import NeonButton from "../../components/NeonButton/NeonButton.js";
import Heading from '../../components/Heading/Heading.js';
import SignUp from './Container/SignUp/SignUp.jsx';
import SignIn from './Container/SignIn/SignIn.jsx';
import {useLocation} from 'react-router-dom' 
import CustomSnackBar from "../../components/CustomSnackBar/CustomSnackBar.js"



// class LeftComponent extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <h1 className="login-register-heading">Greetings</h1> */}
//                 <Heading text="GREETINGS!" fontSize="35px"></Heading>
//                 <div id="signIn">
//                     <NeonButton props={{ text: "Sign In", color: "#26a0da" }} />
//                 </div>
//             </div>
//         );
//     }
// }

const LeftComponent = () => (
    <div>
        {/* <h1 className="login-register-heading">Greetings</h1> */}
        <Heading text="GREETINGS!" fontSize="35px"></Heading>
        <div id="signIn">
            <NeonButton props={{text:"Sign In", color:"#26a0da"}}/>
        </div>
    </div>
);

// class RightComponent extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <h1 className="login-register-heading">Greetings</h1> */}
//                 <Heading text="GREETINGS!" fontSize="35px"></Heading>
//                 <div id="signUp">
//                     <NeonButton props={{ text: "Sign Up", color: "#26a0da" }} />
//                 </div>
//             </div>
//         );
//     }
// }

const RightComponent = () => (
    <div>
        {/* <h1 className="login-register-heading">Greetings</h1> */}
        <Heading text="GREETINGS!" fontSize="35px"></Heading>
        <div id="signUp">
            <NeonButton props={{text:"Sign Up", color:"#26a0da"}}/>
        </div>
    </div>
);

const App = (props) => {

    const location = useLocation()
    const CustomSnackBarRef = useRef();

    useEffect(() => {
        if(location.state && location.state.hasOwnProperty("snackbar_message")){
            CustomSnackBarRef.current.handleClick(location.state.snackbar_message);
        }
        return () => {
            
        }
    }, [])

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
                <CustomSnackBar ref={CustomSnackBarRef}></CustomSnackBar>
            </Container>
        </div>
    );
};

export default App;
