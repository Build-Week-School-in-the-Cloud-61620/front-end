import React, { useState, useEffect } from "react";

import { Button, Form, FormGroup, Label, Input, Card, Col } from "reactstrap";

import TodoList from "./TodoList";

const tasks = [
  {
    text: "Grade papers",
    isCompleted: false,
  },
  {
    text: "write syllabus",
    isCompleted: false,
  },
];

const Volunteer = () => {
  const [items, setItems] = useState([]);
  // const { user } = useSelector((state) => state);
  useEffect(() => {
    setItems(tasks);
  }, []);

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
            <Card>
              <TodoList todos={items} />
            </Card>
            {/* END:*********************************************** */}
          </Card>
          <FormGroup>
            <Label for="days">Select Day you are available</Label>
            <Input type="select" name="days" id="days" multiple>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="Hours">Select Hours you are available</Label>
            <Input type="select" name="hours" id="hour" multiple>
              <option>9am - 10pm</option>
              <option>11am - 12pm</option>
              <option>1pm - 2pm</option>
              <option>3pm - 4pm</option>
              <option>5pm - 6pm</option>
              <option>7pm - 8pm</option>
              <option>9pm - 10pm</option>
            </Input>
          </FormGroup>
          <FormGroup row style={{ color: "slategray" }}>
            <Label for="locationSelect" sm={2}>
              Location
            </Label>
            <Col sm={10}>
              <Input type="select" name="location" id="locationSelect">
                <option>United States</option>
                <option>United Kingdom</option>
              </Input>
            </Col>
          </FormGroup>
          <Button style={{ color: "whitesmoke", background: " #00BFFF" }}>
            Select
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Volunteer;
