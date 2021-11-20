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
import Dog from "./component/Dog"
import Event from "./component/Event"
import Event_Edit from "./component/Event_Edit"
import Event_Create from "./component/Event_Create"
import Dog_Edit from "./component/Dog_Edit"
import Dog_Create from "./component/Dog_Create"
import Profile from "./component/Profile"
import Profile_Edit from "./component/Profile_Edit"
import LogOut from "./component/LogOut"
import Footer from "./component/Footer"
import PublicEvents from "./component/PublicEvents";

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
          <Route path="/DogEdit/:id">
            <Dog_Edit />
          </Route>
          <Route path="/DogCreate">
            <Dog_Create />
          </Route>
          <Route path="/Dog">
            <Dog />
          </Route>
           <Route path="/Event">
            <Event />
          </Route>
          <Route path="/EventEdit/:id">
            <Event_Edit />
          </Route>
          <Route path="/EventCreate/">
            <Event_Create />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/LogOut">
            <LogOut />
          </Route>
           <Route path="/ProfileEdit/:id">
            <Profile_Edit />
          </Route>
           <Route path="/PublicEvents">
            <PublicEvents />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer ></Footer>
      </div>
    </Router>
  );
}