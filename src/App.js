import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/About">
            About
          </Route>
          <Route exact path="/Resume">
            Resume
          </Route>
          <Route exact path="/services">
            Services
          </Route>
          <Route exact path="/Portfolio">
            Portfolio
          </Route>
          <Route exact path="/Testimoials">
            Testimoials
          </Route>
          <Route exact path="/ContactUs">
            ContactUs
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
