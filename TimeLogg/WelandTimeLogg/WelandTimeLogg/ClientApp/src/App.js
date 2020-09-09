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
import './Stylesheet.css'
import Table from 'react-bootstrap/Table'
import { SelectList } from 'react-widgets'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import FetchDataActivityLogEntries from "./components/FetchDataActivityLogEntries";




class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                 
                    <Switch>
                        <Route exact path='/' component={FetchDataActivitiyLogEntries} />
                        <Route path='/FetchDataHistory' component={FetchDataHistory} />
                        <Route path='/Login' component={Login} />
                        <Route path='/Register' component={Register} />
                    </Switch>
                </div>
            </Router>
        );
    }

}
export default App;



//function App() {
//    return (<Router>
//        <div className="App">
//            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                <div className="container">

//                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                        <ul className="navbar-nav ml-auto">
//                            <li className="nav-item">
//                                <Link className="nav-link" to={"/"}>Login</Link>
//                            </li>
//                            <li className="nav-item">
//                                <Link className="nav-link" to={"/Register"}>Sign up</Link>
//                            </li>
//                        </ul>
//                    </div>
//                </div>
//            </nav>






//            <div className="auth-wrapper">
//                <div className="auth-inner">
//                    <Switch>
//                        <Route exact path="/">
//                            <Login />
//                        </Route>
//                        <Route path="/Register">
//                            <Register />
//                        </Route>
//                    </Switch>
//                </div>
//            </div>
//        </div></Router>
//    );
//}



//class App extends Component {

//    render() {
//        return (
//            <div>
//                <div><NavBar /></div>

//            </div>

//        );
//    }
//}




//export default App;