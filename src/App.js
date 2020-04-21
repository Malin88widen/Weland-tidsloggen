import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import homePageWelands from "./components/HomePage";
import Counters from "./components/counters";
import "./App.css";
import HomePage from './components/HomePage';
import Form from './components/Form';
import History from './components/History';
class App extends Component {
  

  render() {
    return (
    <div>
        <NavBar/>
        <br />
        <main className="homePageWelands">
        <h1><HomePage /></h1>
        <br />
      <p><Form /></p>
      <p><History /></p>
      
      <br />
      <br />

      <button>
        Inställningar
      </button>
    
        </main>
    </div>
    );
  }
}

export default App;
