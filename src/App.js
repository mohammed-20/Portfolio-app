import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Themes from "./theme";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import Testimoials from "./Pages/Testimoials";

import "./App.css";

export const Themecontext = createContext({});
function App() {
  const [theme, setTheme] = useState("yellow");

  const handleClick = (e) => {
    setTheme(e.target.id);
  };

  return (
    <div className="App">
      <ThemeProvider theme={Themes[theme]}>
        <Router>
          <Switch>
            <Themecontext.Provider value={handleClick}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/About">
                <AboutUs />
              </Route>
              <Route path="/Resume">
                <Resume />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route exact path="/Portfolio">
                <Portfolio />
              </Route>

              <Route exact path="/Testimoials">
                <Testimoials />
              </Route>

              <Route path="/ContactUs">
                <ContactUs />
              </Route>
            </Themecontext.Provider>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
