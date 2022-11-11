/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Kyiv"/>
    
      <footer>This project was codded by <a href="https://lanak.netlify.app/" aria-label="lana" target="_blank"
          rel="noopener noreferrer" alt="github">Lana Kolisnyk</a>{" "}and is opensourced on {" "}
      
      <a href="https://github.com/LanaKolisnyk/react-weather-app" aria-label="github" target="_blank"
          rel="noopener noreferrer" alt="github">GitHub</a>
    </footer></div>
    </div>
  );
}


