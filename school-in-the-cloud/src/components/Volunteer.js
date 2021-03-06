import React, { useState, useEffect } from "react";

import { Button, Card, Col } from "reactstrap";


import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
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

  const [volunteer, setVolunteer] = useState({
    days: '',
    hours: '',
    location: '',
  });

  const {days, hours, location} = volunteer;


  const handleChanges = (e) => {
    setVolunteer({...volunteer,
        [e.target.name]:
          e.target.value
        });
  };

  console.log(volunteer);

  const handleSubmit = (e) => {
    e.persist();
    setVolunteer({
      days: '',
      hours: '',
      location: '',
    });
  };

  useEffect(() => {
    setItems(tasks);
  }, []);



  return (
    <>
      <div>
        <AvForm onSubmit={handleSubmit} style={{ margin: "15%" }}>
          <Card color="" style={{ background: "#209cee" }}>
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
          <AvGroup>
          
            <AvField type="select" name="days" onChange={handleChanges} value={days}  id="days" multiple label="Select Your Day of Availablity">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </AvField>
          </AvGroup>
          <AvGroup>
            
            <AvField type="select" name="hours" onChange={handleChanges} value={hours} id="hour" multiple label="Select Your Hours of Availablity">
              <option>9am - 10pm</option>
              <option>11am - 12pm</option>
              <option>1pm - 2pm</option>
              <option>3pm - 4pm</option>
              <option>5pm - 6pm</option>
              <option>7pm - 8pm</option>
              <option>9pm - 10pm</option>
            </AvField>
          </AvGroup>
          <AvGroup row style={{ color: "slategray" }}>
           
            <Col sm={10}>
              <AvField type="select" name="location" onChange={handleChanges} value={location} id="locationSelect" label="Location" sm={2}>
                <option>United States</option>
                <option>United Kingdom</option>
              </AvField>
            </Col>
          </AvGroup>
          <Button style={{ color: "whitesmoke", background: " #00BFFF" }}>
            Select
          </Button>
        </AvForm>
      </div>
    </>
  );
};
export default Volunteer;

