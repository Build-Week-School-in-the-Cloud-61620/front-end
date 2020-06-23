import React from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  CardTitle,
  CardText,
  Label,
  Input,
  Col,
} from "reactstrap";
import { Redirect } from "react-router-dom";

const Student = (props) => {
  return (
    <>
      <div>
        <Form style={{ margin: "15%" }}>
          <Card color="" style={{ background: "#87CEFA" }}>
            <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
              I'm an Student!
            </h2>
          </Card>

          <br />

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

          <legend>Choose a Volunteer</legend>

          <Card body style={{ color: "slategray", margin: "0 auto" }}>
            <CardTitle>Sam Smith</CardTitle>
            <CardText>United States</CardText>
            <FormGroup check>
              <legend>Availibility</legend>
              <Label check></Label>
              <Input type="checkbox" name="Monday" />
              Monday 10am - 12 pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="tuesday" />
              Tuesday 7pm - 8pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="Wednesday" />
              Friday 1pm - 2pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="friday" />
              Saturday 10am - 11am
            </FormGroup>

            <br />

            <Button style={{ color: "whitesmoke", background: "	#00BFFF" }}>
              Select
            </Button>
          </Card>

          <Card body style={{ color: "slategray", margin: "0 auto" }}>
            <CardTitle>Julie White</CardTitle>
            <CardText>United Kingdom</CardText>
            <FormGroup check>
              <legend>Availibility</legend>
              <Label check></Label>
              <Input type="checkbox" name="Monday" />
              Monday 10am - 11pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="Wednesday" />
              Wednesday 3pm - 4pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="friday" />
              Friday 10am - 11pm
            </FormGroup>

            <FormGroup check>
              <Label check></Label>
              <Input type="checkbox" name="saturday" />
              Saturday 1pm - 2pm
            </FormGroup>

            <br />

            <Button style={{ color: "whitesmoke", background: "	#00BFFF" }}>
              Select
            </Button>
          </Card>
        </Form>
      </div>
    </>
  );
};

export default Student;
