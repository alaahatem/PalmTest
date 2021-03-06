import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "./home/Home.jsx";
import About from './About/About';
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component ={About}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
