import './app-styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';



function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
