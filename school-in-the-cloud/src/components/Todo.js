import React from "react";
import "./TodoList.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateTaskAsAdmin, deleteTasksAsAdmin } from "../actions";

const Todo = ({ todo, setTask, task }) => {
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
            //Set state of input to task value
            setTask(todo);
            //
          }}
        >
          Edit
        </Button>
        <Button
          style={{ color: "whitesmoke", background: " #00BFFF" }}
          onClick={(e) => {
            //Pull task value and task from props
            //Dispatch action
            e.preventDefault();
            dispatch(updateTaskAsAdmin(todo, task));
          }}
          type="submit"
        >
          Submit Update
        </Button>
      </div>
    </div>
  );
};

export default Todo;
