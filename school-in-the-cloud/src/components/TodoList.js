import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { Form, FormGroup, Input } from "reactstrap";
// import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { fetchVolTasksAsAdmin } from "../actions";
import { addVolTasksAsAdmin } from "../actions";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const { tasks, user } = useSelector((state) => state);
  console.log(tasks);

  console.log("TodoForm", user, props.volId);

  const [task, setTask] = useState({ description: "", completed: 0 });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVolTasksAsAdmin(user.id, props.volId, task));
    // dispatch(fetchVolTasksAsAdmin(props.volId));
    setTask({ description: "", completed: 0 });
  };

  const { description } = task;

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchVolTasksAsAdmin(props.volId));
  }, []);

  // const completeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // };
  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  return (
    <div className="app">
      <div className="todo-list">
        {/* <TodoForm volId={props.volId} /> */}
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
        {tasks.map((task) => (
          <Todo key={task.id} todo={task} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
