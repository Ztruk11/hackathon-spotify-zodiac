import React, { Component } from "react";
import axios from "axios";

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

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {}
    };
  }

  componentWillReceiveProps() {
    axios
      .post(this.props.url)
      .then(response => response.data)
      .then(json => this.setState({ json }));

    var dataFromChild = this.state.json.mood;
    this.props.getMood(dataFromChild);
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">Here's your horoscope!</div>
          <div>
            <br />
            Current Date: {this.state.json.current_date} <br />
            Compatibility: {this.state.json.compatibility} <br />
            Lucky Number: {this.state.json.lucky_number} <br />
            Lucky Time: {this.state.json.lucky_time} <br />
            Color: {this.state.json.color} <br />
            Date Range: {this.state.json.date_range} <br />
            Mood: {this.state.json.mood} <br />
            Description: {this.state.json.description} <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Fetch;
