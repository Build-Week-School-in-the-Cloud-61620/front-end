import React, { useState } from "react";
import "./TodoList.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateTaskAsAdmin, deleteTasksAsAdmin } from "../actions";

const Todo = ({ todo, setTask, task, clearInput }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTasksAsAdmin(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTaskAsAdmin(todo, task));
    clearInput();
    setIsEditing(false);
  };
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* if  */}
      {todo.description}
      {/* printing out entry */}
      <div>
        <Button style={{ color: "whitesmoke", background: " #00BFFF" }}>
          Complete
        </Button>
        <Button
          style={{ color: "whitesmoke", background: " #00BFFF" }}
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          Delete
        </Button>
        <Button
          style={{ color: "whitesmoke", background: " #00BFFF" }}
          onClick={() => {
            setTask(todo);
            setIsEditing(true);
          }}
        >
          Edit
        </Button>
        <Button
          style={{
            color: isEditing ? "#00BFFF" : "whitesmoke",
            background: isEditing ? "whitesmoke" : "#00BFFF",
          }}
          onClick={handleUpdate}
          type="submit"
        >
          Submit Update
        </Button>
      </div>
    </div>
  );
};

export default Todo;
