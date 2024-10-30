import React, { useEffect, } from 'react';
import AppRoute from './routes/appRoutes';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('custom-cursor');
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);
  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}

export default App;