import React, { useEffect} from "react";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

const Admin = (props) => {
    console.log("YAAAAAAAAAAMMMMMMMSSSS")
    useEffect(() => {
      axiosWithAuth().get("/admin/volunteers/all").then(res => {
        console.log(res);
      }) 
      .catch((error) => {
        console.log("error", error);
      })
    }, []);

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
