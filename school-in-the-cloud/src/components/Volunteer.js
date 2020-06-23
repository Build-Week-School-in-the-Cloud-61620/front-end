import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import Task from "./Task";

const Volunteer = (props) => {
  const [items, setItems] = useState(["Grade papers", "write syllabus"]);

  return (
    <>
      <div>
        <Form style={{ margin: "15%" }}>
          <Card color="" style={{ background: "#87CEFA" }}>
            <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
              I'm an Volunteer!
            </h2>
          </Card>

          <Card>
            <legend>Tasks</legend>

            {/* BEG:*********************************************** */}

            {/* END:*********************************************** */}

            <Table hover>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {/* Task.js component (passing down add/delete/edit actions through props). The component will have icons, styling, etc. Will pull todos from global state based off user id. Map over the todo data to create our list. */}
                <Task task="Research Reactstrap" status="In Progress" />
                <Task task="Research Redux" status="In Progress" />
                <Task task="Research Yup Validation" status="Complete" />
              </tbody>
            </Table>
          </Card>
        </Form>
      </div>
    </>
  );
};

export default Volunteer;
