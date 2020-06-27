import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { Form, FormGroup, Input, Button } from "reactstrap";
// import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { fetchVolTasksAsAdmin } from "../actions";
import { addVolTasksAsAdmin } from "../actions";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const { tasks, user } = useSelector((state) => state);
  // console.log(tasks);

  console.log("TodoForm", props.userId, props.volId);

  const [task, setTask] = useState({ description: "", completed: 0 });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVolTasksAsAdmin(props.userId, props.volId, task));
    clearInput();
    // setTask({ description: "", completed: 0 });
  };

  const clearInput = () => {
    setTask({ description: "", completed: 0 });
  };

  const { description } = task;

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("use effect called", props.volId);

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
            <Button
              style={{ color: "whitesmoke", background: " #00BFFF" }}
              type="submit"
            >
              Submit
            </Button>
            <Button
              style={{ color: "whitesmoke", background: " #00BFFF" }}
              onClick={() => {}}
              type="submit"
            >
              Submit Update
            </Button>
          </FormGroup>
        </Form>
        {
          (console.log("TodoList", tasks),
          tasks.map((t) => (
            <Todo
              key={t.id}
              todo={t}
              setTask={setTask}
              task={task.description}
              clearInput={clearInput}
            />
          )))
        }
      </div>
    </div>
  );
};
export default TodoList;
