import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homeTop">
        <div className="embed-container">
          <iframe
            title="sweet-movie"
            src="https://player.vimeo.com/video/344644642?autoplay=1&?muted=1&background=1"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Home;
