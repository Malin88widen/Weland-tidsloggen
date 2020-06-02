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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/HomePage">Weland Solution</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/History">Historik</Nav.Link>
            <Nav.Link href="/Settings">Inställningar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/HomePage">
          <HomePage />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
        <Route path="/History">
          <History />
        </Route>
      </Switch>
    </Router>

    // const NavBar = () => {
    //   return (
    //     <Router>
    //       <div>
    //         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //           <a class="navbar-brand" href="/">
    //             Weland Solution
    //           </a>

    //           <button
    //             class="navbar-toggler"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#navbarNavAltMarkup"
    //             aria-controls="navbarNavAltMarkup"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span class="navbar-toggler-icon"></span>
    //           </button>

    //           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //             <div class="navbar-nav">
    // {/* <a class="nav-item nav-link active" href="#">
    //Hem <span class="sr-only">(current)</span>
    //</a> */}
    //       <a class="nav-item nav-link" href="/History">
    //         Historik
    //       </a>
    //       <a class="nav-item nav-link" href="/Settings">
    //         Inställningar
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //           renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/#">
    //         <HomePage />
    //       </Route>
    //       <Route path="/Settings">
    //         <Settings />
    //       </Route>
    //       <Route path="/History">
    //         <History />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default NavBar;
