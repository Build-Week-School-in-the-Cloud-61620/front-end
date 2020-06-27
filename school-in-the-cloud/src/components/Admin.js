import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
// import axios from "axios"; // ** DO NOT DELETE **
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";

import { fetchVols } from "../actions";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const { volunteers, user, isLoggedIn } = useSelector((state) => state);
  console.log(
    `from Admin view: admin is ${user.name} and logged in = ${isLoggedIn}`
  );
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
                to={{
                  pathname: "/volunteer-view",
                  state: { volId: vol.id, userId: user.id },
                }}
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
