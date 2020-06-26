import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

function Home() {
  return (
    <>
      <Form style={{ margin: "5%" }}>
        <Card color="" style={{ background: "#209cee" }}>
          <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
            Welcome to the Home Page!
          </h2>
        </Card>
      </Form>

      <Card style={{ margin: "10%" }}>
        {/* <div>
          <Link to="/student">Student Page</Link>
        </div>
        <div>
          <Link to="/volunteer">Volunteer Page</Link>
        </div>
        <div>
          <Link to="/admin">Admin Page</Link>
        </div>
        <div>
          <Link to="/todoList">ToDo List</Link>
        </div>
        <br /> */}
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </Card>
    </>
  );
}

export default Home;
