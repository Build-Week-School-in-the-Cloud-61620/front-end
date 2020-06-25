import React, { useState, useEffect } from "react";
import { fetchVolTasksAsAdmin } from "../actions";
import { Button, Card, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";
import TodoList from "./TodoList";

const VolunteerView = (props) => {
  //   const dispatch = useDispatch();
  //   const { tasks } = useSelector((state) => state);
  //   console.log(tasks);

  //   useEffect(() => {
  //     dispatch(fetchVolTasksAsAdmin(volId));
  //   }, []);

  const { volId } = props.location;

  return (
    <>
      <div>
        <AvForm style={{ margin: "15%" }}>
          <Card color="" style={{ background: "#87CEFA" }}>
            <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
              Volunteer View!
            </h2>
          </Card>
          <Card>
            <legend>Tasks</legend>
            {/* BEG:*********************************************** */}
            <Card>
              <TodoList volId={volId} />
            </Card>
            {/* END:*********************************************** */}
          </Card>
        </AvForm>
      </div>
    </>
  );
};
export default VolunteerView;