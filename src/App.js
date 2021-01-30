import styles from "./App.module.css"
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'

// Components
import Homepage from "./components/Homepage/Homepage"
import Footer from "./components/Footer/Footer"
import AboutUs from "./components/About-Us/AboutUs"
import Events from "./components/Events/Events"
import Workshops from './components/Workshops/Workshops'

function App() {
  return (

    <>
      <Router>
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
      <Footer />

    </>
  );
}

export default App;
