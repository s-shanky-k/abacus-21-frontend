import React from 'react';

const LeftOverlay = ({ children }) => (
    <div className="overlay-panel overlay-left">{children}</div>
);

const RightOverlay = ({ children }) => (
    <div className="overlay-panel overlay-right">{children}</div>
);

class Overlay extends React.Component {
    static Left = LeftOverlay;
    static Right = RightOverlay;

    render() {
        const { children } = this.props;
        return (
            <div className="overlay-container">
                <div className="overlay">{children}</div>
            </div>
        );
    }
}

export default Overlay;
