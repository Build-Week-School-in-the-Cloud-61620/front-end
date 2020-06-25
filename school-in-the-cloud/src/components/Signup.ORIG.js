import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Form, FormGroup, Label, Input, Card, Col } from "reactstrap";
import RoleDropdown from "./RoleDropdown";
import { createUser } from "../actions";

const Signup = () => {
  //Setting state for creating a user...
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  

  //User object destructured...
  const { username, email, role, password, name } = user;

  //Dispatch from actions...
  const dispatch = useDispatch();

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Line 32", user);
    dispatch(createUser(user));
    setUser({
      username: "",
      name: "",
      email: "",
      password: "",
      role: "admin",
      location: "",
    });
  };
  return (
    <AvForm onSubmit={handleSubmit} style={{ margin: "15%" }}>
      <Card color="" style={{ background: "#87CEFA" }}>
        <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Sign Up Here!</h2>
      </Card>
      <FormGroup>
        <Label for="name">Name</Label>
        <AvField
          type="name"
          name="name"
          id="name"
          placeholder="First/Last Name"
          value={name}
          onChange={handleChanges}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <AvField
          type="email"
          name="email"
          id="email"
          placeholder="Email Here"
          value={email}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label for="username">User Name</Label>
        <AvField
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleChanges}
        />
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <AvField
          type="password"
          name="password"
          id="password"
          placeholder="Password Here"
          value={password}
          onChange={handleChanges}
        />
      </FormGroup>

        

      <RoleDropdown value={role} onChange={handleChanges} />

      {/* <FormGroup row style={{ color: "slategray" }}>
            <Label for="locationSelect" sm={2}>
              Location
            </Label>
            <Col sm={10}>
              <AvField type="select" name="location" id="locationSelect">
                <option>United States</option>
                <option>United Kingdom</option>
              </Input>
            </Col>
      </FormGroup>    */}

      <Button type="submit">Submit</Button>
    </AvForm>
  );
};

export default Signup;
