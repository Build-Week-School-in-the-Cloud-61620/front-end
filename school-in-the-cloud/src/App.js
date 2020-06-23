import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Student from "./components/Student";
import Volunteer from "./components/Volunteer";
import Admin from "./components/Admin";
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
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
          <Student  role="student" />
        </Route>
        <Route path="/admin">
          <Admin role="admin" />
        </Route>
        <Route path="/volunteer">
          <Volunteer role="volunteer" />
        </Route>
        <Route path="/todolist">
          <TodoList role="todoList" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
