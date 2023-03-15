import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/page1/page1';
import MF from './pages/MF/MF';
import PA from './pages/PA/PA';
import PA from './pages/Mental/Mental';
import Aviao from './pages/aviao/Aviao';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Counter />
          <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="mf" element={<MF/>} />
            <Route path="pa" element={<PA/>} />
            <Route path="aviao" element={<Aviao/>} />
            <Route path="ferramentas" element={<Mental/>} />
          </Routes>
          <Counter />
          <footer>
            <p>Este projeto busca contribuir no compartilhamento e entendimento do conhecimento.</p>
          </footer>
        </header>
      </div>
  );
}

export default App;
