import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  yellow,
  blue,
  red,
  green,
  mayablue,
  roman,
  springgreen,
  violent,
  darkBlue,
  darkCyan,
  darkGreen,
  darkIndig,
  darkOrang,
  darkPink,
  darkPurpal,
  darkRed,
} from "./Theme";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("");

  const handleClick = (e) => {
    setTheme(e.target.id);
  };

  const toggleTheme = () => {
    //Light Color
    if (theme === "blue") {
      return blue;
    }
    if (theme === "green") {
      return green;
    }
    if (theme === "mayablue") {
      return mayablue;
    }
    if (theme === "red") {
      return red;
    }
    if (theme === "roman") {
      return roman;
    }
    if (theme === "springgreen") {
      return springgreen;
    }
    if (theme === "violent") {
      return violent;
    }
    if (theme === "yellow") {
      return yellow;
    }
    //Dark Color
    if (theme === "darkBlue") {
      return darkBlue;
    }
    if (theme === "darkCyan") {
      return darkCyan;
    }
    if (theme === "darkGreen") {
      return darkGreen;
    }
    if (theme === "darkIndig") {
      return darkIndig;
    }
    if (theme === "darkOrang") {
      return darkOrang;
    }
    if (theme === "darkPink") {
      return darkPink;
    }
    if (theme === "darkPurpal") {
      return darkPurpal;
    }
    if (theme === "darkRed") {
      return darkRed;
    }
    return yellow;
  };

  return (
    <div className="App">
      <ThemeProvider theme={toggleTheme()}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home onClick={handleClick} />
            </Route>
            <Route exact path="/About">
              <AboutUs onClick={handleClick} />
            </Route>
            {/*
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
      </ThemeProvider>
    </div>
  );
}

export default App;
