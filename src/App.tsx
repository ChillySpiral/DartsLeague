import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Results from './pages/Results';
import Games from './pages/Games';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="DartsLeague/" element={<Home />} />
        <Route path="DartsLeague/results" element={<Results/>} />
        <Route path="DartsLeague/games" element={<Games/>} />
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;
