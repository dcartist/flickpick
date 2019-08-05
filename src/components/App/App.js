import React, { Component } from "react";
import Config from "../../config";
import Home from "../Home/Home";
import About from "../About/About";
import Movies from "../MovieList/MovieList";
import Login from "../Login/Login";
import GenresList from "../GenreList/GenreList";
import Genre from "../Genre/Genre";
import Signup from "../Signup/Signup";
import Navigation from "../Navigation/Navigation";
import MovieInfo from "../MovieDetails/MovieDetails";
import FavoriteList from "../FavoriteList/FavoriteList";
import DeleteUser from "../DeleteUser/DeleteUser";

import { Route } from "react-router-dom";
import "react-bootstrap";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoggedIn: false,
      userId: localStorage.userId,
      searchList: []
    };
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }
  deleteUser = e => {
    e.preventDefault();
    let userId = localStorage.userId;
    const url = Config.serverURL + `/user/${userId}`;
    axios.delete(url).then(_ => {
      this.setState({
        email: "",
        password: "",
        isLoggedIn: false,
        userId: ""
      });
      localStorage.clear();
      this.goHome();
    });
  };
  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false,
      userId: ""
    });
    localStorage.clear();
    this.goHome();
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSignUp(e) {
    e.preventDefault();
    axios
      .post(Config.serverURL + "/user/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        localStorage.userId = response.data.userId;
        this.setState({ isLoggedIn: true });
        this.setState({ userId: response.data.userId });
      })
      .then(() => this.goToLogin())
      .catch(err => console.log(err));
  }
  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(Config.serverURL + "/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        localStorage.userId = response.data.userId;
        this.setState({ isLoggedIn: true });
        this.setState({ userId: response.data.userId });
      })
      .then(() => this.goToMovies())
      .catch(err => console.log(err));
  }
  setInfo(id) {
    this.setState({ id: id });
  }
  goHome = () => {
    this.props.history.push("/");
  };
  goToMovies = () => {
    this.props.history.push("/movies");
  };
  goToLogin = () => {
    this.props.history.push("/login");
  };

  updateSearchResults(searchQuery) {
    const url = Config.serverURL + "/movies/search/";

    if (searchQuery.length > 0) {
      axios.get(url + searchQuery).then(res => {
        this.setState({ searchList: res.data.results });
      });
    } else {
      this.setState({ searchList: [] });
    }
  }

  render() {
    return (
      <div>
        {/* <Navigation
          {...this.state}
          logout={this.handleLogOut}
          updateSearchResults={this.updateSearchResults}
        /> */}
        <Route
          path=""
          render={props => (
            <Navigation
              {...this.state}
              logout={this.handleLogOut}
              updateSearchResults={this.updateSearchResults}
              {...props}
            />
          )}
        />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* For all genres listing */}
        <Route path="/genres" exact component={GenresList} />
        <Route
          path="/movies"
          render={props => <Movies userInfo={this.state} />}
        />
        <Route
          path="/favorites"
          render={props => <FavoriteList userId={this.state.userId} />}
        />
        <Route
          path="/movieinfo/:id"
          render={props => (
            <MovieInfo setInfo={this.setInfo} {...props} {...this.state} />
          )}
        />
        <Route
          path="/genres/id/:id"
          render={props => (
            <Genre setInfo={this.setInfo} {...props} {...this.state} />
          )}
        />
        <Route
          path="/signup"
          render={props => {
            return (
              <Signup
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/login"
          render={props => {
            return (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/deleteuser"
          render={props => {
            return <DeleteUser deleteuser={this.deleteUser} {...props} />;
          }}
        />
      </div>
    );
  }
}
export default App;
