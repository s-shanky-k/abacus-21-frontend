import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import NavbarBig from './components/NavbarBig/NavbarBig';
import NavbarSmall from './components/NavbarSmall/NavbarSmall';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/About-Us/AboutUs';
import Events from './pages/Events/Events';
import Workshops from './pages/Workshops/Workshops';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    return (
      // Parent class
      <div className="App">
        <Router>
          {this.state.width < 808 ? <NavbarSmall /> : <NavbarBig />}
          <Switch>
            <Route path="/" exact>
              <Redirect to="/homepage" />
            </Route>
            <Route path="/homepage" exact component={Homepage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/events" exact component={Events} />
            <Route path="/workshops" exact component={Workshops} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App

