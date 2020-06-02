import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import FetchDataHistory from "./FetchDataHistory";
import Settings from "./Settings";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FetchDataActivityLogEntries from "./FetchDataActivityLogEntries";

const NavBar = () => {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Weland Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/settings">Settings</Link>
                            <Link to="/FetchDataHistory">History</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Switch>
                <Route exact path="/">
                    <FetchDataActivityLogEntries />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/FetchDataHistory">
                    <FetchDataHistory />
                </Route>
            </Switch>
        </Router>
    );
};

export default NavBar;
