import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import "./App.css";
import HomePage from "./components/HomePage";
import History from "./components/History";
import Settings from './components/Settings';
import FetchDataActivities from './components/FetchDataActivities';
import FetchDataForms from './components/FetchDataForms';
import FetchDataActivityLogEntries from './components/FetchDataActivityLogEntries';
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
                <div><FetchDataForms /></div>
             
            
             
                <br />
              
          
            
            
            </div>
        );
    }
}


 


export default App;

