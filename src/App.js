/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
    
      <footer>This project was codded by Lana Kolisnyk{" "}
      
      <a href="https://github.com/LanaKolisnyk/react-weather-app" aria-label="github" target="_blank"
          rel="noopener noreferrer" alt="github">and is opensourced</a>
    {" "}  on GitHub</footer></div>
    </div>
  );
}


