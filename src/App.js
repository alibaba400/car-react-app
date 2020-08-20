import React from "react";
import "./App.css";
import AboutUs from "./websitedesign/AboutUs";
import ContactUs from "./websitedesign/ContactUs";
import Services from "./websitedesign/Services";
import Specials from "./websitedesign/Specials";
import Home from "./websitedesign/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/services" component={Services} />
        <Route path="/specials" component={Specials} />
      </Switch>
    </Router>
  );
}

export default App;
