import React, { Component } from "react";
// import ProtoImage1 from "./prototype.jpg";
// import ProtoImage2 from "./prototype1.jpg";
// import ModelImage from "./flickpick_erd.png";
import FlixPick from "../Navigation/flickpick.png";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>
          Abo<span>ut</span>
        </h2>
        <img src={FlixPick} alt="flickpick logo" />
        <h3 className="Centered">
          This A<span>pp</span> was bui<span>lt</span> by:
        </h3>
        <p className="Centered">
          Shane Vann-Shirley, Paula Bannerman, Melika Rasti
        </p>
        <h3>
          Descripti<span>on</span>
        </h3>
        <p>
          Flickpick is a full-stack MERN app themed around popular movies. It
          utilizes data pulled from{" "}
          <a href="https://www.themoviedb.org/?language=en-US">
            The Movie Database
          </a>
          . In the Movie section, a user can peruse a random selection of
          popular movies; they can also use the search bar to narrow their
          search by title. The Genre section loads paginated popular movies by
          genre. If a user chooses to sign up, they are able to add or delete
          movies from a favorite list while viewing a movie's details. Each
          movie detail page features some information about the movie as well as
          an embedded trailer for the film (if available).
        </p>
        <h3>
          Technolo<span>gy</span> Us<span>ed</span>
        </h3>
        <ul>
          <li>Express</li>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>NodeJS</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <h3>
          Re<span>po</span> Li<span>st</span>
        </h3>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ashanevs/flickpick"
              target="_blank"
            >
              FlickPick React App
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ashanevs/flickpick-api"
              target="_blank"
            >
              FlickPick App Api
            </a>
          </li>
        </ul>
        {/* <h3>
          Mode<span>ls</span> Us<span>ed</span>
        </h3>
        <ul>
          <h4>User</h4>
          <li>name: String,</li>
          <li>password: String,</li>
          <li>listOfMovies: []</li>
          <p />
          <h4>Movie</h4>
          <li>id: Number,</li>
          <li>title: String,</li>
          <li>overview: String,</li>
          <li>popularity: Number,</li>
          <li>adult: Boolean,</li>
          <li>original_language: String,</li>
          <li>posterImage: String,</li>
          <li>backdropImage: String,</li>
          <li>videoExists: Boolean,</li>
          <li>videoKey: String,</li>
          <li>vote_average: Number,</li>
          <li>release_date: Date,</li>
          <li>genre_ids: Array,</li>
          <li>cast_crew: [],</li>
          <li>genres: []</li>
          <p />
          <h4>Genre</h4>
          <li>id: Number,</li>
          <li>name: String</li>
        </ul>
        <img src={ModelImage} alt="Model images" />
        <h3>
          Bon<span>us</span> Objectiv<span>es</span>
        </h3>
        <p>Adding authentication for users, embedding videos</p>
        <h3>
          Distributi<span>on</span> of Wo<span>rk</span>
        </h3>
        <p>Melika/Shane - back end; Melika, Shane and Paula - front end</p>

        <h3>
          WireFra<span>me</span> of Desi<span>gn</span>
        </h3>

        <img src={ProtoImage1} alt="Prototype 1" />
        <img src={ProtoImage2} alt="Prototype 2" /> */}
      </div>
    );
  }
}

export default About;
