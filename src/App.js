import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import homePageWelands from "./components/homePageWelands";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  

  render() {
    return (
    <div>
        <NavBar/>
        <br />
        <main className="homePageWelands">
    <h1>Hej </h1>
        </main>
    </div>
    );
  }
}

export default App;
