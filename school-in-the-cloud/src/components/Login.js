import React from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

function Login() {
  return (
    <Form style={{ margin: "15%" }}>
      <Card color="info">
        <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Login Here!</h2>
      </Card>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email Here" />
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password Here"
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

export default Login;
