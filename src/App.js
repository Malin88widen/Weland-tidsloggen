import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import homePageWelands from "./components/homePageWelands";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="homePageWelands">
       
        </main>
      </React.Fragment>
    );
  }
}

export default App;
