import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Signup">
          <button>Signup</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
