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
            <Router>
            <div>
                <NavBar />
                    <br />
                    <Link to="/settings">Settings</Link>
                    <Link to="/history">History</Link>
            </div> 
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
