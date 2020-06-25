import React from "react";
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { FormGroup, Label, Input } from "reactstrap";

const RoleDropdown = (props) => {
  return (
    <AvGroup>
      
      <AvField type="select" name="role" id="role" label="Role" {...props}>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
        <option value="volunteer">Volunteer</option>
      </AvField>
    </AvGroup>
  );
};

export default RoleDropdown;
