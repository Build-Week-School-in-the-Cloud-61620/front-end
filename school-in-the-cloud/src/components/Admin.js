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
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Card } from "reactstrap";
import { fetchVols } from "../actions";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const { volunteers } = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(fetchVols());
  }, []);
  // console.log("YAAAAAAAAAAMMMMMMMSSSS");
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/admin/volunteer/all")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }, []);

  return (
    <div>
      <Form style={{ margin: "15%" }}>
        <Card color="" style={{ background: "#209cee" }}>
          <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
            I'm an Admin!
          </h2>
        </Card>

        {/* BEG:**************************************************************************************************** */}
        <Card color="" style={{ background: "#87CEFA" }}>
          <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Volunteers</h2>
          <ul></ul>
          {volunteers.map((vol) => {
            return (
              <Link
                key={vol.id}
                to={{ pathname: "/volunteer-view", volId: vol.id }}
              >
                <li key={vol.id} volunteer={vol}>
                  {vol.name}
                </li>
              </Link>
            );
          })}
        </Card>

        {/* END:**************************************************************************************************** */}
      </Form>
      )
    </div>
  );
};


export default Admin;
