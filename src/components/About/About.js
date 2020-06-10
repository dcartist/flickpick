import React, { Component } from 'react';
import ProtoImage1 from "./prototype.jpg";
import ProtoImage2 from "./prototype1.jpg";
import ModelImage from "./flickpick_erd.png"
import FlixPick from "../Navigation/flickpick.png"

class About extends Component {
    render() {
        return (
            <div className="About">
            
            <h2>Abo<span>ut</span></h2>
            <img src={FlixPick} alt="flickpick logo"></img>
            <h3 className="Centered">This App was built by:</h3>
            <p className="Centered">Shane Vann-Shirley, Paula Bannerman, Melika Rasti</p>
            <p>Our goal is to create a movie app that allows a user to log in, search for movies by various identifiers, and then store movies in a to-do list</p>
            <h3>Technolo<span>gy</span> Us<span>ed</span></h3>
            <ul>
                <li>Express</li>
                <li>CORS</li>
                <li>ReactJS/ ReactDOM</li>
                <li>React Bootstrap</li>
                <li>NodeJS</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
          
            <h3>Mode<span>ls</span> Us<span>ed</span></h3>
            <ul>
                <h4>User</h4>
                <li>name: String,</li>
                <li>password: String,</li>
                <li>listOfMovies: []</li>
                <p></p>
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
                <p></p>
            <h4>Genre</h4>
            <li>id: Number,</li>
            <li>name: String</li>
            </ul>
            <img src={ModelImage} alt="Model images"></img>
            <h3>Bon<span>us</span> Objectiv<span>es</span></h3>
            <p>Adding authentication for users, embedding videos</p>
            <h3>Distributi<span>on</span> of Wo<span>rk</span></h3>
            <p>
            Melika/Shane - back end; Melika, Shane and Paula - front end
            </p>

            <h3>WireFra<span>me</span> of Desi<span>gn</span></h3>

            <img src={ProtoImage1} alt="Prototype 1"></img>
            <img src={ProtoImage2} alt="Prototype 2"></img>
            </div>
        );
    }
}

export default About;