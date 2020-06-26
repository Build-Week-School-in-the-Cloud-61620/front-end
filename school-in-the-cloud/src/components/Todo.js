import React from "react";
import "./TodoList.css";
import { Button } from "reactstrap";

const Todo = ({ todo }) => {
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
          onClick={""}
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
