import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <nav>
      <NavLink className="burger" to="/">
        <img src={require("../../assets/burger.png")} alt="burger" />
      </NavLink>
      <div className="buttonContainer">
        <NavLink to="/">
          <button className={'home-button'}>Home</button>
        </NavLink>
        <NavLink to="/characters">
          <button className={'characters-button'}>Characters</button>
        </NavLink>
      </div>
    </nav>
  );
}
