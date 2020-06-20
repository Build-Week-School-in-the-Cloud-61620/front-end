import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Student from "./components/Student";
import Volunteer from "./components/Volunteer";
import Admin from "./components/Admin";

function App() {
  const role = "";
  {
    /* choices: admin, student, volunteer */
  }

  return (
    <>
      <div>
        {/* if role is equal to student; then redirect to the student path  */}
        {role === "student" && <Redirect to="/student" />}
      </div>

      <div>{role === "admin" && <Redirect to="/admin" />}</div>

      <div>{role === "volunteer" && <Redirect to="/volunteer" />}</div>

      {/* if role doesn't equal to student AND admin AND volunleer THEN redirect to the home path */}
      <div>
        {role !== "student" && role !== "admin" && role !== "volunteer" && (
          <Redirect to="/" />
        )}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/volunteer">
          <Volunteer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
