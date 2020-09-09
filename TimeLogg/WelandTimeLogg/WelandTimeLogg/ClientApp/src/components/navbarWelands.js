import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import FetchDataHistory from "./FetchDataHistory";
import Settings from "./Settings";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FetchDataActivityLogEntries from "./FetchDataActivityLogEntries";
import Login from "./auth/Login";
import SignUp from "./auth/Register";

const NavBar = () => {
    return (
     
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/FetchDataActivityLogEntries">Weland Solution</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link id='settingsLink' to="/settings">Settings </Link>
                            <Link to="/FetchDataHistory">History</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    
    );
};

export default NavBar;
