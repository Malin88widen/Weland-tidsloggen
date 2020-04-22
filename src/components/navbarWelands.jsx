import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
 import History from "./History";
import Settings from "./Settings";

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Weland Solution
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* <a class="nav-item nav-link active" href="#">
            Hem <span class="sr-only">(current)</span>
          </a> */}
              <a class="nav-item nav-link" href="/History">
                Historik
              </a>
              <a class="nav-item nav-link" href="/Settings">
                Inställningar
              </a>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/#">
            <HomePage />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/History">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         <h1>Weland Solution</h1>
//         <p>Tidslogg</p>

//         <span className="badge badge-pill badge-secondary">

//         </span>
//       </a>
//     </nav>
//   );
// };

export default NavBar;
