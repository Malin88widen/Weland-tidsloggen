import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import History from "./History";
import Settings from "./Settings";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/HomePage">Weland Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/settings">Settings</Link>
                            <Link to="/history">History</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
};

export default NavBar;
