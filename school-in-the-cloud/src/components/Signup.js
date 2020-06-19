import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, Card, CardImg } from 'reactstrap';

function Signup() {

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
    

    <Form style={{ margin: '15%'}}>

      <Card color='info'>
        <h2 style={{ color: 'whitesmoke', margin: '0 auto'}}>
          Sign Up Here!
        </h2>
        
      </Card>
            <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' id='email' placeholder='Email Here'/>
            </FormGroup>

            <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' placeholder='Password Here' />
            </FormGroup>

            <FormGroup>
                <Label for='password2'>Password</Label>
                <Input type='password' name='password2' id='password2' placeholder='Confirm Password' />
            </FormGroup>

            <FormGroup>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>
                          Role
                  </DropdownToggle>
                  <DropdownMenu>
                    <div onClick={() => {
                      toggle();

                    }}>
                        Admin
                    </div>

                    <div onClick={() => {
                      toggle();

                    }}>
                        Volunteer
                    </div>

                    <div onClick={() => {
                      toggle();

                    }}>
                        Student
                    </div>
                  </DropdownMenu>
                </Dropdown>
           </FormGroup>

            <Button>Submit</Button>
        </Form>
    )
  }
  
  export default Signup;
  