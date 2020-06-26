import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup, Card } from "reactstrap";
import RoleDropdown from "./RoleDropdown";
import { createUser } from "../actions";
import { axios } from "axios";

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
    <AvForm onSubmit={handleSubmit} style={{ margin: "10%" }}>
      <Card color="" style={{ background: "#87CEFA" }}>
        <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Sign Up Here!</h2>
      </Card>
      {/* With AvField */}
      <AvField
        type="name"
        name="name"
        id="name"
        placeholder="First/Last Name"
        value={name}
        onChange={handleChanges}
        label="Name"
        required
      />
      <AvField
        type="email"
        name="email"
        id="email"
        placeholder="Email Here"
        value={email}
        onChange={handleChanges}
        label="Email"
        required
      />
      <AvField
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={username}
        onChange={handleChanges}
        label="username"
        required
      />

      <AvField
        type="password"
        name="password"
        id="password"
        placeholder="Password Here"
        value={password}
        onChange={handleChanges}
        label="password"
        required
      />

      <RoleDropdown value={role} onChange={handleChanges} />

      {/* With select and AvField */}
      <AvField
        type="select"
        name="location"
        onChange={handleChanges}
        label="Location"
      >
        <option>US</option>
        <option>UK</option>
      </AvField>

      <FormGroup>
        <Button>Submit</Button>
      </FormGroup>
    </AvForm>
  );
};

export default Signup;
