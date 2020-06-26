import React, { useEffect} from "react";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
// import axios from "axios"; // ** DO NOT DELETE **
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

const Admin = (props) => {
    useEffect(() => {
      axiosWithAuth().get("/admin/volunteer/all").then(res => {
      // axios.get("https://cat-fact.herokuapp.com/facts").then(res => { // ** DO NOT DELETE **
        console.log(res);
      }) 
      .catch((error) => {
        console.log("error", error);
      })
    }, []);

  return (
    <div>
      <Form style={{ margin: "15%" }}>
        <Card color="" style={{ background: "#209cee" }}>
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
