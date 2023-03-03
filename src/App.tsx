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
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results/>} />
        <Route path="/Games" element={<Games/>} />
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;
