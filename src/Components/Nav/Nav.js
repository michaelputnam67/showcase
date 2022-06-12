import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <nav>
      <NavLink className="burger" to="/">
        <img src={require("../../assets/burger.png")} />
      </NavLink>
      <div className="buttonContainer">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/characters">
          <button>Characters</button>
        </NavLink>
      </div>
    </nav>
  );
}
