import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

const RoleDropdown = (props) => {
  return (
    <FormGroup>
      <Label for="role">Role</Label>
      <Input type="select" name="role" id="role" {...props}>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
        <option value="volunteer">Volunteer</option>
      </Input>
    </FormGroup>
  );
};

export default RoleDropdown;
