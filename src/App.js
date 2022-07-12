import "./app-styles/App.scss";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import CharactersScreen from "./Components/CharactersScreen/CharactersScreen";
import CharacterStats from "./Components/CharacterStats/CharacterStats";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersScreen />} />
        <Route
          exact path="/character/:id"
          element={<CharacterStats />}
        />
      </Routes>
    </main>
  );
}

export default App;
