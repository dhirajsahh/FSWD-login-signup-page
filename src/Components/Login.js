import React, { useState } from "react";
import "./style.css";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;
    if (!email || !password) {
      alert("Enter all the details");
    } else {
      logindata(email, password);
    }

    async function logindata(email, password) {
      const response = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });
      setMessage(response.data.message);
    }
  }
  return (
    <>
      <div className="logincontainer">
        <form action="" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="container">
            <label htmlFor="">Email:</label>
            <br />
            <input type="text" ref={emailref} />
          </div>
          <div className="container">
            <label htmlFor="">Password:</label>
            <br />
            <input type="password" ref={passwordref} />
          </div>
          <div className="container">
            <button onClick={handleSubmit}>LOGIN</button>
          </div>
        </form>
        <h1>{message.toLocaleUpperCase()}</h1>
      </div>
    </>
  );
};

export default Login;
