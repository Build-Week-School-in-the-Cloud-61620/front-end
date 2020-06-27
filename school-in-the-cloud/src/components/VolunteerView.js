import React from "react";
import { useSelector } from "react-redux";
import { Card } from "reactstrap";
import { AvForm } from "availity-reactstrap-validation";
import TodoList from "./TodoList";

const VolunteerView = (props) => {
  //   const dispatch = useDispatch();
  //   const { tasks } = useSelector((state) => state);
  //   console.log(tasks);

  //   useEffect(() => {
  //     dispatch(fetchVolTasksAsAdmin(volId));
  //   }, []);
  const { user, isLoggedIn } = useSelector((state) => state);
  console.log("Link props***", props.location.state);
  console.log(
    `from VolunteerView: admin is ${user.name} and logged in = ${isLoggedIn}`
  );
  return (
    <>
      <div>
        <AvForm style={{ margin: "15%" }}>
          <Card color="" style={{ background: "#87CEFA" }}>
            <h2 style={{ color: "whitesmoke", margin: "0 auto" }}>
              {props.location.state.volunteer.name}'s Tasks
            </h2>
          </Card>
          <Card>
            <legend>Tasks</legend>
            {/* BEG:*********************************************** */}
            <Card>
              <TodoList
                volId={props.location.state.volId}
                userId={props.location.state.userId}
              />
            </Card>
            {/* END:*********************************************** */}
          </Card>
        </AvForm>
      </div>
    </>
  );
};
export default VolunteerView;
