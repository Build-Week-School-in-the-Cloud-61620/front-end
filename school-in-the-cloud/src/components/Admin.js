import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Form, Card } from "reactstrap";
import { fetchVols } from "../actions";
import VolunteerView from "./VolunteerView";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const { volunteers } = useSelector((state) => state);
  console.log("Admin view", volunteers);

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
        <Card color="" style={{ background: "#87CEFA" }}>
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
