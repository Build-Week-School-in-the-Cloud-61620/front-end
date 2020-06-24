import React, { useState } from "react";
import "./TodoList.css";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    ListGroup,
    ListGroupItem,
    Table,
  } from "reactstrap";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* if  */}
      {todo.text}
      {/* printing out entry */}
      <div>
        <Button style={{ color: 'whitesmoke', background: ' #00BFFF'}} onClick={() => completeTodo(index)}>Complete</Button>
        <Button style={{ color: 'whitesmoke', background: ' #00BFFF'}} onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
      <Input
        placeholder="Enter Task"
        name="todoStuff"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      </FormGroup>
    </Form>
  );
}
function TodoList(props) {
  console.log("CHECK TODO PROPS");
  const [todos, setTodos] = useState(props.todos);
  // const [todos, setTodos] = useState([
  //   {
  //     text: "Grade papers",
  //     isCompleted: false
  //   }, 
  //  {
  //     text: "write syllabus",
  //     isCompleted: false
  //  }
  // ]);
  console.log(todos);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default TodoList;