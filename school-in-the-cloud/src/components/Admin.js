import React from "react";
import { Redirect } from "react-router-dom";
import TodoList from "./TodoList";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

function Admin(props) {

  const role = props.role;
  
  return (
    <> 
    <div>
      {role === "admin" ? 

    <Form style={{ margin: "15%" }}>
      <Card color='' style={{background: '#87CEFA'}}>
      <h2 style={{ color: 'whitesmoke', margin: '0 auto'}}>
        I'm an Admin!
      </h2>
      
    </Card>

    {/* BEG:**************************************************************************************************** */}
    <Card >
    <TodoList />
    </Card>

    {/* END:**************************************************************************************************** */}
    
    </Form>
    : <Redirect to="/" />}
    </div>
    </>
  );
}

export default Admin;