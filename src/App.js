import "./app-styles/App.scss";
import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import CharactersScreen from "./Components/CharactersScreen/CharactersScreen";
import CharacterStats from "./Components/CharacterStats/CharacterStats";
import apiCalls from './apiCalls'


function App() {
   const [background, setBackground] = useState('')
  
  useEffect(() => {
    apiCalls.getStore().then(res => setBackground(res.image))
  }, [])

  console.log(background)
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
