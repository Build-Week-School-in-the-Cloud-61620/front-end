import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector((state) => state);
  console.log(user);
return <div>App{user.role === "admin" && <h1>{user.role}</h1>}</div>;
};

export default App;
