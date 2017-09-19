import React, { Component } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotify: {}
    };
  }

  componentWillReceiveProps() {
    var spotifyApi = new SpotifyWebApi({ });
    spotifyApi.searchPlaylists(this.props.mood).then(
      function(data) {
        console.log("Found playlists are", data.body);
      },
      function(err) {
        console.log("Something went wrong!", err);
      }
    );
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">The playlist for your mood is...</div>
          <div />
        </div>
      </div>
    );
  }
}

export default Sprite;
