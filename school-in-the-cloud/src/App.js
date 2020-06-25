import React, { useState } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Volunteer from './components/Volunteer';
import Dashboard from "./components/Dashboard";

import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/protected" component={Dashboard} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/volunteer" component={Volunteer} />
      
       
       

        {/* <Route path="/student">
          <Student role="student" />
        </Route>
        <Route path="/admin">
          <Admin role="admin" />
        </Route>
        <Route path="/volunteer">
          <Volunteer role="volunteer" />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
