import './app-styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import CharactersScreen from './components/CharactersScreen/CharactersScreen';
import Character from './components/Character/Character';


function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<CharactersScreen />} />
        <Route path={`/character/id`} element={<Character />} />
      </Routes>
    </main>
  );
}

export default App;
