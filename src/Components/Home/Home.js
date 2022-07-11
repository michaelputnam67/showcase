import "./home.scss";
import React, { useEffect, useState } from "react";
import apiCalls from "../../apiCalls";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { Link } from "react-router-dom";

export default function Home() {
  const [favoriteCharacters, setfavoriteCharacters] = useState([]);
  const [truck, setTruck] = useState();

  const [burgerOTD, setBurgerOTD] = useState("");

  useEffect(() => {
    apiCalls.getBurger().then((res) => {
      setBurgerOTD(res);
    });
  }, []);

  const getId = () => Math.floor(Math.random() * 225);

  useEffect(() => {
    apiCalls.getFavoriteCharacters().then((data) => {
      setfavoriteCharacters(data.characters);
    });

    apiCalls.getTruck(getId()).then((data) => setTruck(data));
  }, []);

  return (
    <section className="home">
      <h1 className="dashboard-title">Bob's Burgers Auditorium</h1>
      <div className="burger-of-the-day">
        <h2>
          Your Burger Of The Day Is: <br></br>
          <span className="burger-name"> The {burgerOTD.name}!</span>
          <br></br>
          <label>
            for <span className="price">{burgerOTD.price}</span>
          </label>
        </h2>
        <br></br>
        <label className="burger-stats">
          Season {burgerOTD.season} | Episode {burgerOTD.episode}
        </label>
      </div>

      {favoriteCharacters.length ? (
        <div className="favorites-container">
          <h2>Here are some of your favorite characters!</h2>
          <CharacterContainer characters={favoriteCharacters} />
        </div>
      ) : (
        <Link to={"/characters"} className="truck-link">
          <h2>
            Hmmm, You don't seem to have any favorite characters. Lets pick some
            up!
          </h2>
          {truck ? (
              <img src={truck.image} alt="truck" />
          ) : (
            ""
          )}
        </Link>
      )}
    </section>
  );
}
