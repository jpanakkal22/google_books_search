import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a class="navbar-brand" href="#">Google Books Search</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>



            {/* <a class="nav-link" href="#">Search <span class="sr-only">(current)</span></a> */}
          </li>
          <li class="nav-item">
          <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
            {/* <a class="nav-link" href="#">Saved</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
