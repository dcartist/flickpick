import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Logo from "./flickpick.png";
import Search from "../Search/Search";

class Navigation extends Component {
  render() {
    return (
      <div>
        {/* Start of Navigation */}
        <Navbar collapseOnSelect expand="lg" className="navBackground">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
              <Link to="/genres" className="nav-link">
                Genres
              </Link>
              {this.props.isLoggedIn ? (
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              ) : (
                " "
              )}

              {!this.props.isLoggedIn ? (
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              ) : (
                " "
              )}
              {!this.props.isLoggedIn ? (
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              ) : (
                " "
              )}
              {this.props.isLoggedIn ? (
                <Link to="/" onClick={this.props.logout} className="nav-link">
                  Log Out
                </Link>
              ) : (
                " "
              )}
              {this.props.isLoggedIn ? (
                <Link to="/deleteuser" className="nav-link">
                  Delete Account
                </Link>
              ) : (
                " "
              )}
              {window.location.href === "http://localhost:3000/movies" ? (
                <div className="nav-link right">
                  <Search {...this.props} />
                </div>
              ) : (
                ""
              )}
            </Nav>
            <Nav />
          </Navbar.Collapse>
        </Navbar>

        {/* End of Navigation */}
      </div>
    );
  }
}

export default Navigation;
