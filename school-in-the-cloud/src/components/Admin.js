import React, { useEffect } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import axios from "axios"; // ** DO NOT DELETE **
import { Form, Card } from "reactstrap";

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
  }, [dispatch]);
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
            Welcome, {user.name}! 
          </h2>
        </Card>

        {/* BEG:**************************************************************************************************** */}
        <Card color="" style={{ background: "#87CEFA" }}>
          <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>Volunteers</h2>
          <h3 style={{ color: "whitesmoke", margin: "0 auto" }}>Click on the volunteer below to view assigned tasks.</h3>
          <ul>
          {volunteers.map((vol) => {
            return (
              <Link
                key={vol.id}
                to={{
                  pathname: "/volunteer-view",
                  state: { volunteer: vol, volId: vol.id, userId: user.id },
                }}
              >
                <li key={vol.id} volunteer={vol}>
                  {vol.name}
                </li>
              </Link>
            );
          })}
          </ul>
        </Card>

        {/* END:**************************************************************************************************** */}
      </Form>
      )
    </div>
  );
};

export default Admin;
