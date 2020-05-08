import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import History from "./components/History";
import Settings from './components/Settings';
import FetchDataActivities from './components/FetchDataActivities';
import FetchDataForm from './components/FetchDataForms';
import FetchDataHistory from './components/FetchDataHistory';
import FetchDataWorking from './components/FetchDataWorking';


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
                <br />
                <div><FetchDataHistory /></div>
                <div><FetchDataActivities /></div>
                <div><FetchDataWorking /></div>
                <br />
                <h1>Data from Form:</h1>
                <div><FetchDataForm /></div>
            
            
            </div>
        );
    }
}


 


export default App;

