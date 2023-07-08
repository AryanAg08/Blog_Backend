import React from "react";
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/index";

function App() {
  return (

    <div>
     <Routes>
      <Route exact path="/dashboard/:id" element={<Dashboard/>} />
     </Routes>
    
     </div>
  );
}

export default App;


/**
 * // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    </div>
 */