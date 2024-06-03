import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gastos from './pages/Gastos'
import Faturamento from './pages/Faturamento'
import Header from './components/header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/faturamento" element={<Faturamento />} />
      </Routes>
    </Router>
  );
}

export default App;