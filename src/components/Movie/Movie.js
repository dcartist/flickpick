// Component that shows the movie card
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DefaultImage from '../Image/imagemovie.jpg'
import './Movie.css'
class Movie extends Component {
  addDefaultSrc = (evt) => {
    evt.preventDefault()
    evt.target.src = DefaultImage

  }


  render() {
    let imgName = `https://image.tmdb.org/t/p/original/${
      this.props.posterImage
    }`;
    return (


      <div>
        <Card id="movie-card">
          
          <Card.Img variant="top" className="adjustedImg"src={imgName} onError={this.addDefaultSrc} />
          {/* <Card.Img variant="top" src={imgName} onLoad={this.handleImageLoad}
        onError={this.handleImageError}/> */}
          <Card.Body className="BodyCard">
            <Card.Title id="card-title">{this.props.title}</Card.Title>
            <Link to={"/movieinfo/" + this.props.id}>
              <Button id="movie-button" variant="primary">
                View Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Movie;
