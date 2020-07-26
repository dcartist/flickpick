import React, { Component } from "react";
import Axios from "axios";
import Movie from "../Movie/Movie";
import Config from "../../config";
import "./Genre.css"

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: [],
      page: 0,
      totalPages: 0
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.getMoviesOfGenre = this.getMoviesOfGenre.bind(this);

    this.getMoviesOfGenre();
  }

  prev(){
    var p = this.state.page - 1;
    if(p>=0){
      this.setState({page: p}, _ => this.getMoviesOfGenre());
    }
  }

  next(){
    var p = this.state.page + 1;
    if(p<this.state.totalPages){
      this.setState({page: p}, _ => this.getMoviesOfGenre());
    }
  }

  getMoviesOfGenre() {
    const url = Config.serverURL + "/genre/id/";
    Axios.get(url + this.props.match.params.id + '?page=' + this.state.page).then(res => {
      this.setState(prevState => ({
        movieInfo: res.data.result, 
        totalPages: res.data.totalPages
      }));
    });
  }

  render() {
    if(this.state.movieInfo.length == 0){
      return (<div className="WaitingMovie">
        <h2>Loading Movie Data...</h2>
        <div className="loader"></div>
      </div>)
          } else {
            let list = this.state.movieInfo.map((item, index) => {
              return (
                <div className="movie-list" key={index}>
                  <Movie
                    title={item.title}
                    overview={item.overview}
                    posterImage={item.posterImage}
                    id={item.id}
                    userInfo={this.props.userInfo}
                  />
                </div>
              );
          });
          return (
            <div className="columns">
                {list}
              <br/>
              <div style={{display: "block"}} className="GenreBox">
                <button className="btn btn-primary" onClick={this.prev}>Previous Page</button>
                <label>{this.state.page+1} / {this.state.totalPages} </label>
                <button className="btn btn-primary" onClick={this.next}>Next Page</button>
              </div>
            </div>
          );

          }

   
  }
}

export default Genre;
