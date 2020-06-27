import React from "react";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import Volunteer from "./Volunteer";
import Student from "./Student";

const Dashboard = () => {
  const { user } = useSelector((state) => state);
  console.log(user);
  if (user.role === "admin") {
    return <Admin user={user} />;
  }
  if (user.role === "volunteer") {
    return <Volunteer user={user} />;
  }
  if (user.role === "student") {
    return <Student user={user} />;
  }
  return (
    <div>
      <h1>You are not logged in.</h1>
    </div>
  );
};

export default Dashboard;
