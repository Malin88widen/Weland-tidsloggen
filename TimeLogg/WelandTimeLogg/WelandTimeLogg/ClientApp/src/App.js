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
//    render() {
//        return (

//            <NavBar />
            

//        );
//    }
//}


    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }
    render() {
        return (
        <div>
            {this.state.loading || !this.state.person ? (
                <div>loading...</div>
            ) : (
                    <div>
                        <div>{this.state.person.name.first}</div>
                    </div>
                )}
        </div>
        
        );
    }
}


export default App;

