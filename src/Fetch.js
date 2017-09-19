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

    // var dataFromChild = this.state.json.mood;
    // this.props.getMood(dataFromChild);
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">Here's your horoscope!</div>
          <div className="panel-body">
            <p><strong>Current Date:  </strong>{this.state.json.current_date}</p>
            <p><strong>Compatibility:  </strong> {this.state.json.compatibility}</p>
            <p><strong>Lucky Number:  </strong>{this.state.json.lucky_number}</p>
            <p><strong>Lucky Time:  </strong>{this.state.json.lucky_time}</p>
            <p><strong>Color:  </strong> {this.state.json.color}</p>
            <p><strong>Date Range:  </strong> {this.state.json.date_range}</p>
            <p><strong>Mood:  </strong>{this.state.json.mood}</p>
            <p><strong>Description:  </strong>{this.state.json.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Fetch;
