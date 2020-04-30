import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import History from "./components/History";
import Settings from './components/Settings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <NavBar />
        );
    }
}

export default App;
