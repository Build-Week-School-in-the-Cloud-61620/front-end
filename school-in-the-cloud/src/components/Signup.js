import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
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
    <Form onSubmit={handleSubmit} style={{ margin: "15%" }}>
      <Card color="" style={{ background: "#87CEFA" }}>
        <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Sign Up Here!</h2>
      </Card>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
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
        <Input
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
        <Input
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
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password Here"
          value={password}
          onChange={handleChanges}
        />
      </FormGroup>

      <RoleDropdown value={role} onChange={handleChanges} />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Signup;
