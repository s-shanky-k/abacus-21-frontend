import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Cookies from "js-cookie"
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/About-Us/AboutUs';
import Events from './pages/Events/Events';
import Workshops from './pages/Workshops/Workshops';
import WorkshopMiddleware from "./pages/Workshops/WorkshopMiddleware"
import EventTemplate from './components/EventTemplate/EventTemplate';
import TechEvents from './pages/Events/TechEvents';
import NonTechEvents from './pages/Events/NonTechEvents';
import EventMiddleware from './pages/Events/Event/EventMiddleware';
import Dashboard from './pages/Dashboard/Dashboard'

import LoginRegister from './pages/LoginRegister/LoginRegister.js'
import ResetPassword from './pages/ResetPassword/ResetPassword.js'
import Navbar from './components/Navbar/Navbar';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import GoogleFormData from "./pages/GoogleFormData/GoogleFormData"

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Hackathon from './pages/Hackathon/Hackathon';
import ScrollSnap from "scroll-snap"
// import AuthApi from "./api/AuthApi"

// componentWillUnmount() {
//   window.removeEventListener('resize', this.updateWindowDimensions);
// }

export const AuthApi = React.createContext();
export const SetAuthApi = React.createContext();
export const Width = React.createContext();
export const Height = React.createContext();

toast.configure()
function App() {
  const [auth, setauth] = useState(false)
  const [width, setwidth] = useState(0)
  const [height, setheight] = useState(0)


  useEffect(() => {

    if (Cookies.get("token") !== undefined && Cookies.get("details") !== undefined) {
      setauth(true)
    }

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])


  const updateWindowDimensions = () => {
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
  }


  return (
    <>
      {
        width > 1100 ? <AppBig /> : <AppSmall />
      }
    </>
  )
}

const AppBig = () => {

  const [auth, setauth] = useState(false)
  const [width, setwidth] = useState(0)
  const [height, setheight] = useState(0)

  const history = useHistory()

  let containerRef = React.createRef()

  const callback = () => {
  }

  const bindScrollSnap = () => {
    const element = containerRef.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
      threshold: 0.2
    })

    snapElement.bind(callback)
  }

  useEffect(() => {

    // Scroll Snap
    bindScrollSnap()

    if (Cookies.get("token") !== undefined && Cookies.get("details") !== undefined) {
      setauth(true)
    }

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])


  const updateWindowDimensions = () => {
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
  }


  return (
    <div className="App" ref={containerRef}>
      <AuthApi.Provider value={auth}>
        <SetAuthApi.Provider value={setauth}>
          <Width.Provider value={width}>
            <Router>
              <Navbar width={width} />
              <Routes />
            </Router>
          </Width.Provider>
        </SetAuthApi.Provider>
      </AuthApi.Provider>

    </div>
  )
}


const AppSmall = () => {


  const [auth, setauth] = useState(false)
  const [width, setwidth] = useState(0)
  const [height, setheight] = useState(0)

  const history = useHistory()


  useEffect(() => {

    // Scroll Snap

    if (Cookies.get("token") !== undefined && Cookies.get("details") !== undefined) {
      setauth(true)
    }

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])


  const updateWindowDimensions = () => {
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
  }

  return (
    <div className="App">
      <AuthApi.Provider value={auth}>
        <SetAuthApi.Provider value={setauth}>
          <Width.Provider value={width}>
            <Router>
              <Navbar width={width} />
              <Routes />
            </Router>
          </Width.Provider>
        </SetAuthApi.Provider>
      </AuthApi.Provider>

    </div>
  )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi)
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/homepage" />
      </Route>
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/events" exact component={Events} />
      <Route path="/workshops" exact component={Workshops} />


      <Route path="/events/tech" exact component={TechEvents} />
      <Route path="/events/non-tech" exact component={NonTechEvents} />
      <Route path="/events/:type/:title" exact component={EventMiddleware} />

      <Route path="/workshops/:title" exact component={WorkshopMiddleware} />

      <Route path="/hackathon" exact component={Hackathon} />




      <Route path="/event-template" exact component={EventTemplate} />

      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/login-register" exact component={LoginRegister} />
      <Route path="/google-form-data" exact component={GoogleFormData} />
      <ProtectedRoute path="/dashboard" auth={Auth} exact component={Dashboard} />
      <Route component={PageNotFound} />


    </Switch>
  )
}

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (auth) {
          return <Component />
        }
        else {
          return <Redirect to="/login-register"></Redirect>
        }
      }} />
  )
}


const ProtectFromLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (auth) {
          return <Redirect to="/dashboard"></Redirect>
        }
        else {
          return <Component />
        }
      }}
    />
  )
}



export default (App)