import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from "./component/About"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Nav from "./component/Nav"
import Home from "./component/Home"
import Register from "./component/Register"
import useToken from './useToken';

export default function App() {

  return (
    <Router>
      <div>
        <Nav ></Nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
             <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}