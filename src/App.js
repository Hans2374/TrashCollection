// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;