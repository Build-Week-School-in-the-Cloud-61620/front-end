import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";
import { Form, FormGroup, Input } from "reactstrap";
import {
  addVolTasksAsAdmin,
  updateTaskAsAdmin,
  deleteTasksAsAdmin,
} from "../actions";

const TodoForm = ({ volId }) => {
  const { user } = useSelector((state) => state);
  console.log("TodoForm", user, volId);
  const dispatch = useDispatch();
  // const [task, setTask] = useState({ description: "", completed: 0 });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVolTasksAsAdmin(user.id, volId, task));
    setTask({ description: "", completed: 0 });
  };

  const { description } = task;

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Enter Task"
          name="description"
          type="text"
          className="input"
          value={description}
          onChange={handleChange}
        />
        
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
