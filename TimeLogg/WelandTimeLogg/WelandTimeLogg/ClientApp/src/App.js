import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";

import Settings from './components/Settings';
import FetchDataActivitiyLogEntries from './components/FetchDataActivityLogEntries';
import FetchDataForm from './components/FetchDataForms';
import FetchDataHistory from './components/FetchDataHistory';
import FetchDataWorking from './components/FetchDataWorking';
import { render } from 'react-dom';


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
            </div>
        );
    }
}





export default App;

