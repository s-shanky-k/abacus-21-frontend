import React from 'react';
import SignUp from './SignUp/SignUp.jsx';
import SignIn from './SignIn/SignIn.jsx';
import Overlay from './Overlay/Overlay.jsx';
import './Container.css';

class Container extends React.Component {
    static SignUp = SignUp;
    static SignIn = SignIn;
    static Overlay = Overlay;

    get container() {
        return document.getElementById('container');
    }

    get signUpButton() {
        return document.getElementById('signUp');
    }

    get signInButton() {
        return document.getElementById('signIn');
    }

    render() {
        const { children, initialRightActive } = this.props;
        return (
            <div
                id="container"
                className={`login-register-container ${
                    initialRightActive
                        ? 'right-panel-active right-panel-active-display'
                        : ''
                }`}
            >
                {children}
            </div>
        );
    }

    signInListener = () => {
        this.container.classList.add('right-panel-active');
    };

    signUpListener = () => {
        this.container.classList.remove('right-panel-active');
    };

    componentDidMount() {
        this.signUpButton.addEventListener('click', this.signInListener);
        this.signInButton.addEventListener('click', this.signUpListener);
    }

    componentWillUnmount() {
        this.signUpButton.addEventListener('click', this.signInListener);
        this.signInButton.addEventListener('click', this.signUpListener);
    }
}

export default Container;
