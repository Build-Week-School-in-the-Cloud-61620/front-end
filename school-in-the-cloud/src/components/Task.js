import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  ListGroupItem,
} from "reactstrap";

function Task(props) {
  // const  group2  = group;
  const renderAuthButton = () => {
    if (props.status === "In Progress") {
      return <Button color="primary">Complete</Button>;
    } else {
      return <Button disabled>Complete</Button>;
    }
  };

  return (
    <tr>
      <td>{props.task}</td>
      <td>{props.status}</td>
      <td>{renderAuthButton()}</td>
    </tr>
  );
}

export default Task;
