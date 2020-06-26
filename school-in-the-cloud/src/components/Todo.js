import React from "react";
import "./TodoList.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateTaskAsAdmin, deleteTasksAsAdmin } from "../actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTasksAsAdmin(id));
  };

  const handleUpdate = (e) => {};
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* if  */}
      {todo.description}
      {/* printing out entry */}
      <div>
        <Button
          style={{ color: "whitesmoke", background: " #00BFFF" }}
          onClick={""}
        >
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
          onClick={""}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Todo;
