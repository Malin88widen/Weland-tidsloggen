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


               


//<div className="App">
//    <Header />
//    <div className="row">
//        <div className="col-md-8">
//            <h2>Customers</h2>
//        </div>
//        <div className="col-md-4 center">
//            <ExportCSV csvData={this.state.data} fileName={this.state.fileName} />
//        </div>
//    </div>
//    <Customers customers={this.customers()} />
//</div>