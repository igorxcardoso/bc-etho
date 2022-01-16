import React from 'react';
import Login from "./screens/login/login.screen";
import { Route, Routes } from "react-router-dom";
import { LoginPath } from "./screens/login/login.types"


import './App.css';

function App() {
  const myText = "Olá";

  return (
    // // Exemplo
    // <div id={myText} className="test-text">
    //   <header>
    //     <b>{myText}</b>
    //     {<Login></Login>}
    //   </header>
    // </div>

    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path={LoginPath} element={<Login />} />

    </Routes>
  );
}

export default App;
