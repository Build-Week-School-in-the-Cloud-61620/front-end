import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, ListGroup, ListGroupItem, Table } from "reactstrap";
import { Redirect } from "react-router-dom";
import Task from "./Task";

function Volunteer(props) {

  const group = "nala"
  const role = props.role;


  return (
    <>
    <div>
      {role === "volunteer" ? 

    <Form style={{ margin: "15%" }}>
      <Card color='' style={{background: '#87CEFA'}}>
      <h2 style={{ color: 'whitesmoke', margin: '0 auto'}}>
        I'm an Volunteer!
      </h2>
    </Card>

    <Card>
      <legend>Tasks</legend>
      <Table hover>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <Task task="Research Reactstrap" status="In Progress"/>
        <Task task="Research Redux" status="In Progress"/>
        <Task task="Research Yup Validation" status="Complete"/>
      </tbody>
    </Table>
    </Card>
    </Form>
     : <Redirect to="/" />}
    </div>
    </>
  );
}

export default Volunteer;
