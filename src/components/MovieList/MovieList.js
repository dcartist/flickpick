// Component showing the movie listing
import React, { Component } from "react";
import Movie from "../Movie/Movie";
import Axios from "axios";
import Config from "../../config";
import "./Movie.css"
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: []
    };
  }

  componentDidMount() {
    const url = Config.serverURL +"/movies/";
    Axios.get(url).then(res => {
      let results = res.data.results;
      this.setState(prevState => ({
        movieInfo: results
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
      const moviesData =
      this.props.userInfo.searchList.length > 0
        ? this.props.userInfo.searchList
        : this.state.movieInfo;
    let list = moviesData.map((item, index) => {
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
    return <div className="columns">{list}</div>;
    }
  
  }
}

export default MovieList;
