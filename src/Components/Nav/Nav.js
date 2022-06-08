import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <nav>
      <Link className="burger" to="/">
        <img src={require("../../assets/burger.png")} />
      </Link>
      <div className="buttonContainer">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
      </div>
    </nav>
  );
}
