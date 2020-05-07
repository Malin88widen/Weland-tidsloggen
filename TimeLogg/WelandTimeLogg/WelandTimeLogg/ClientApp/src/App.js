import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import History from "./components/History";
import Settings from './components/Settings';
import FetchData from './components/FetchData';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>

                <div><NavBar /></div>
                <br />
            <div><FetchData /></div>
            
            </div>
        );
    }
}


 


export default App;

