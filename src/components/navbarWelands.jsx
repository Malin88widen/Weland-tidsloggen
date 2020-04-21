import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Weland Solution
      </a>
      <div>
        <p>
          <strong> Tidsloggen </strong>
        </p>
      </div>
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
          <a class="nav-item nav-link active" href="#">
            Hem <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="/Historik">
            Historik
          </a>
          <a class="nav-item nav-link" href="/Inställningar">
            Inställningar
          </a>
        </div>
      </div>
    </nav>
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
