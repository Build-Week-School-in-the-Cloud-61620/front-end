import React from "react";
import { Redirect } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

const Admin = (props) => {
  return (
    <div>
      <Form style={{ margin: "15%" }}>
        <Card color="" style={{ background: "#87CEFA" }}>
          <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
            I'm an Admin!
          </h2>
        </Card>

        {/* BEG:**************************************************************************************************** */}
        <Card></Card>

        {/* END:**************************************************************************************************** */}
      </Form>
      )
    </div>
  );
};

export default Admin;
