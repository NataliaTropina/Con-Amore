import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Vorstellung from '../Vorstellung/Vorstellung';
import Rahmenbedinungen from '../Rahmenbedinungen/Rahmenbedinungen';
import Sicherheit from '../Sicherheit/Sicherheit';
import Tagesgeschehen from '../Tagesgeschehen/Tagesgeschehen';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/vorstellung" element={<Vorstellung />} />
        <Route path="/rahmenbedinungen" element={<Rahmenbedinungen />} />
        <Route path="/sicherheit" element={<Sicherheit />} />
        <Route path="/tagesgeschehen" element={<Tagesgeschehen />} />
      </Route>
    </Routes>
  );
}

export default App;
