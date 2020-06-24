import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";
import { loginUser } from "../actions";
import RoleDropdown from "./RoleDropdown";

const Login = (props) => {
  //React-redux hook used to call dispatch from actions folder...
  const dispatch = useDispatch();
  console.log(props.history);

  //Form state for login
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "admin",
  });

  //Destructured credentials object...
  const { username, password, role } = credentials;

  //Change handler for form inputs...
  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  //Submit handler to access application...
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials, props));
    // axiosWithAuth()
    //   .post(`/auth/login`, credentials)
    //   .then((res) => {
    //     console.log(res, res.data);
    //     localStorage.setItem("token", res.data.token);
    //     props.history.push("/protected");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  //Added functionality to form...
  return (
    <Form onSubmit={handleSubmit} style={{ margin: "15%" }}>
      <Card color="" style={{ background: "#87CEFA" }}>
        <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Login Here!</h2>
      </Card>
      <FormGroup>
        <Label for="username">User Name</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter user name"
          onChange={handleChanges}
          value={username}
        />
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password Here"
          onChange={handleChanges}
          value={password}
        />
      </FormGroup>
      {/* Added select component from reactstrap to add role to login form*/}
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input
          type="select"
          name="role"
          id="exampleSelect"
          value={role}
          onChange={handleChanges}
        >
          <option>Admin</option>
          <option>Student</option>
          <option>Volunteer</option>
        </Input>
      </FormGroup> */}
      <RoleDropdown value={role} onChange={handleChanges} />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Login;
