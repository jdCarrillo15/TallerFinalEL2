// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Conceptos from './components/Conceptos';
import Marcas from './components/Marcas';
import Proveedores from './components/Proveedores';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Almacén de Repuestos</h1>
      
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/conceptos" style={{ marginRight: '10px' }}>Conceptos</Link>
        <Link to="/marcas" style={{ marginRight: '10px' }}>Marcas</Link>
        <Link to="/proveedores">Proveedores</Link>
      </nav>

      <Routes>
        <Route path="/conceptos" element={<Conceptos />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/proveedores" element={<Proveedores />} />
      </Routes>
    </div>
  );
}

export default App;
