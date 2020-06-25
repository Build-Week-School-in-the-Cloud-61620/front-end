import React from "react";
import "./TodoList.css";
import { Button } from "reactstrap";

const Todo = ({ todo, completeTodo, index, removeTodo }) => {
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
          onClick={() => completeTodo(index)}
        >
          Complete
        </Button>
        <Button
          style={{ color: "whitesmoke", background: " #00BFFF" }}
          onClick={() => removeTodo(index)}
        >
          x
        </Button>
      </div>
    </div>
  );
};

export default Todo;
