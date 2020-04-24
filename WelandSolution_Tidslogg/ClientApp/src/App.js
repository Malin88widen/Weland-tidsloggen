import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import History from "./components/History";
import Settings from './components/Settings';
// import Dropdown from './components/navbarWelands';



class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br />
                {/* <HomePage /> */}
            </div>
        );
    }
}

export default App;

