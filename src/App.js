import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import History from "./components/History";
import Settings from './components/Settings';





class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <main className="homePageWelands">
          <div class="container">
            <div class="row">
              <div class="col-sm-4"></div>
              <h1>
                <HomePage />
              </h1>
            </div>

            <div class="row">
              <div class="col-sm-4"></div>
              <p>
                <Form />
              </p>
            </div>
           
            <div class="row">
              <div class="col-sm-4"></div>
              <p>
                <History />
              </p>
            </div>
            <div class="row">
              <div class="col-sm-4"></div>
              <p>
                <Settings />
              </p>
            </div>
            <div class="row">
              <div class="col-sm-4"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
