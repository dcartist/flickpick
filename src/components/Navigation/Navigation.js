import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
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
          {/* <Navbar.Brand href="/"><img src={Logo} alt="Logo"></img></Navbar.Brand> */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Link to="/login" className="nav-link">
                Log In
              </Link> */}
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
              <Link to="/genres" className="nav-link">
                Genres
              </Link>
              {/* <Nav.Link to='/movies'>Movies</Nav.Link> */}

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
              
              {/* <div className="right">
              </div> */}
            </Nav>
            <Nav className="navSearch">
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}

<Form inline>
              <Search className="justify-content-end"/>
              </Form>
            
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* End of Navigation */}
      </div>
    );
  }
}

export default Navigation;
