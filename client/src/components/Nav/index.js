import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
        <nav className="navbar navbar-expand-lg mb-0" id="Navbar">
        <a className="navbar-brand" href="/" id="navbarBrand">Google Books Search</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active textColor">
            <Link
              to="/"
              className= {
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              Search
            </Link>              
            </li>
            <li className="nav-item textColor">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>              
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
