import React, { useRef, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [message, setMessage] = useState("");
  const nameref = useRef(null);
  const emailref = useRef(null);
  const phoneref = useRef(null);
  const passwordref = useRef(null);
  const roleref = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const phone = phoneref.current.value;
    const password = passwordref.current.value;
    const role = roleref.current.value;
    if (!name || !email || !phone || !password || !role) {
      alert("Fill all the details");
    } else {
      singupdata(name, email, phone, password, role);
    }

    console.log(name, email, phone, password, role);
  }
  async function singupdata(name, email, phone, password, role) {
    const user = await axios.post("http://localhost:4000/api/signup", {
      name,
      role,
      phone,
      email,
      password,
    });
    const response = await user.data.message;
    setMessage(response);
  }
  return (
    <div>
      <div className="signupcontainer">
        <form action="" onSubmit={handleSubmit}>
          <h1>SIGNUP FORM</h1>
          <div className="container">
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" ref={nameref} />
          </div>
          <div className="container">
            <label htmlFor="">Email:</label>
            <br />
            <input type="email" ref={emailref} />
          </div>
          <div className="container">
            <label htmlFor="">Password:</label>
            <br />
            <input type="password" ref={passwordref} />
          </div>
          <div className="container">
            <label htmlFor="">Phone:</label>
            <br />
            <input type="text" ref={phoneref} />
          </div>
          <div className="container">
            <label htmlFor="">Role:</label>
            <br />
            <input type="text" ref={roleref} />
          </div>
          <div className="container">
            <button onClick={handleSubmit}>SIGN UP</button>
          </div>
          <h1>{message.toUpperCase()}</h1>
        </form>
      </div>
    </div>
  );
};

export default Signup;
