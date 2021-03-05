import React, { Component, useRef, useEffect, useState, useContext } from 'react';
import './LoginRegister.css';
import Container from './Container/Container.jsx';
import NeonButton from "../../components/NeonButton/NeonButton.js";
import Heading from '../../components/Heading/Heading.js';
import SignUp from './Container/SignUp/SignUp.jsx';
import SignIn from './Container/SignIn/SignIn.jsx';
import { useHistory, useLocation } from 'react-router-dom'

import { AuthApi, SetAuthApi, Width } from "../../App"
import Cookies from "js-cookie"
import LoginRegisterXS from "../../components/LoginRegisterXS/LoginRegisterXS"



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
            <NeonButton props={{ text: "Sign In", color: "#26a0da" }} />
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
            <NeonButton props={{ text: "Sign Up", color: "#26a0da" }} />
        </div>
    </div>
);

const App = (props) => {

    const Auth = useContext(AuthApi)
    const SetAuth = useContext(SetAuthApi)
    const _Width = useContext(Width)
    const history = useHistory()
    const location = useLocation()
    const [queryParams, setqueryParams] = useState({})

    useEffect(() => {


        // Redirect to Dashboard after Google Login
        let queryString = require('query-string')
        let params = queryString.parse(props.location.search)
        if (!(Object.keys(params).length === 0)) {
            SetAuth(true)
            let obj = {
                name: params.name,
                abacusid: params.abacusid,
                email: params.email,
                phone: params.phone,
                college: params.college,
                dept: params.dept,
                year: params.year
            }
            let obj_str = JSON.stringify(obj)
            Cookies.set("details", obj_str)
            Cookies.set("token", params.token)
            history.push({
                pathname: "/dashboard",
                state: params
            })
        }
        else {
            if (Cookies.get('token') !== undefined && Cookies.get('details') !== undefined) {
                history.push({
                    pathname: "/dashboard",
                    state: params
                })
            }
            else {
                Cookies.remove('token')
                Cookies.remove('details')
            }
        }

        return () => {

        }
    }, [])

    return (
        _Width > 1100 ? <div className="Login-Register-App">
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

        </div> : <LoginRegisterXS></LoginRegisterXS>
    );
};

export default App;
