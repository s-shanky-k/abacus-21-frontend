import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import NavbarBig from './components/NavbarBig/NavbarBig';
import NavbarSmall from './components/NavbarSmall/NavbarSmall';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/About-Us/AboutUs';
import Events from './pages/Events/Events';
import Workshops from './pages/Workshops/Workshops';
import { Footer } from './components/Footer/Footer';
import Load from './components/Load/Load'
import EventTemplate from './components/EventTemplate/EventTemplate';
import TechEvents from './pages/Events/TechEvents';
import NonTechEvents from './pages/Events/NonTechEvents';

import LoginRegister from './pages/LoginRegister/LoginRegister.js'



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, scrollTop:0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.getScroll = this.getScroll.bind(this)
    // this.wholeRef = React.createRef()
  }

  // getScroll() {
  //   const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
  //   const scrollTop = this.wholeRef.scrollTop
  //   console.log(`onScroll, window.scrollY: ${scrollY} wholeRef.scrollTop: ${scrollTop}`)
  //   this.setState({
  //     scrollTop: scrollTop
  //   })
  // }

  componentDidMount() {
   
    window.addEventListener('resize', this.updateWindowDimensions);

    this.updateWindowDimensions();
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(window)
  }
  

  render() {
    
    return (
     
        
      // Parent class
      <div className="App" onScroll={this.getScroll}>
       
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

            <Route path="/tech-events" exact component={TechEvents} />
            <Route path="/non-tech-events" exact component={NonTechEvents} />

            <Route path="/event-template" exact component={EventTemplate} />
            <Route path="/login-register" exact component={LoginRegister} />
          </Switch>
         
        </Router>
        
      </div>
    );
  }
}
export default App

