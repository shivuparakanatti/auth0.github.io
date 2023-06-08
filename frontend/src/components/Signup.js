
import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5010/api/create", userData)
      .then((res) => {
        if (res.data.message) return setSuccess(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.error) return setAlert(err.response.data.error);
        if (err.response.data.message)
          return setAlert(err.response.data.message);
      });
  };


  return (
    <div className=" ">
      <div>
        {alert.length > 1 ? (
          <div className="flex items-center justify-center my-2">
            <div
              className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded "
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{alert}</span>
              <button
                className="border-2 border-red-700 font-bold bg-red-100 p-1 mx-2 h-8 rounded-lg"
                onClick={() => {
                  setAlert("");
                }}
              >
                ok
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {success.length > 1 ? (
          <div className="flex items-center justify-center my-2">
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">User created succesfully.</span>
              <button
                className="border-2 border-green-700 font-bold bg-green-100 p-1 mx-2 h-8 rounded-lg"
                onClick={() => {
                  setSuccess("");
                }}
              >
                ok
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <form
        className=" flex flex-col items-center justify-center gap-4 py-40 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-2xl text-indigo-500">Sign-UP</h1>
        <input
          type="text"
          className="p-1  border-2 rounded-md border-black"
          placeholder="First Name"
          onChange={(e) => {
            setUserData({ ...userData, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          className="p-1 border-2 rounded-md border-black"
          placeholder="Last Name"
          onChange={(e) => {
            setUserData({ ...userData, lastName: e.target.value });
          }}
        />
        <input
          type="text"
          className="p-1 border-2 rounded-md border-black"
          placeholder="Email"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="text"
          className="p-1 border-2 rounded-md border-black"
          placeholder="Password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        <input
          type="submit"
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 m-2 rounded-md"
          value="SignUP"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Signup;
