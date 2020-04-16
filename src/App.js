import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Logga in 
        </h2>
        <p>
          Användarnamn
        </p>
        <p>
          Lösenord
        </p>
        <a
          className="App-link"
          href="https://localhost/registration"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registrera dig
        </a>
      </header>
    </div>
  );
}

export default App;
