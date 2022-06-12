import "./app-styles/App.scss";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CharactersScreen from "./components/CharactersScreen/CharactersScreen";
import CharacterStats from "./components/CharacterStats/CharacterStats";

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
