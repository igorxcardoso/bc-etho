import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const myText = "Olá";

  return (
    <div id={myText} className="test-text">
      <header>
        <b>{myText}</b>
      </header>
    </div>
  );
}

export default App;
