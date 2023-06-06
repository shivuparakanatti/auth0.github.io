import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [logindetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [popup, setPopup] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5010/api/login", logindetails)
      .then((res) => {
        if (res.data)
          return localStorage.setItem("key", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };
  return (
    <div className=" ">
      <form
        className=" flex flex-col items-center justify-center gap-4 py-40 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-2xl text-indigo-500">Login</h1>

        <input
          type="text"
          className="p-1 border-2 rounded-md border-black"
          placeholder="Email"
          onChange={(e) => {
            setLoginDetails({ ...logindetails, email: e.target.value });
          }}
        />
        <input
          type="text"
          className="p-1 border-2 rounded-md border-black"
          placeholder="Password"
          onChange={(e) => {
            setLoginDetails({ ...logindetails, password: e.target.value });
          }}
        />
        <input
          type="submit"
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 m-2 rounded-md"
          value="Login"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
