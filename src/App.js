import "./App.css";
import React, { Component } from "react";
import Fetch from "./Fetch";
import Sprite from "./Sprite";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zodiac: "",
      mood:''
    };
    this.handleZodiacChange = this.handleZodiacChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMood = this.getMood.bind(this);
  }

  handleClick(e) {
    this.setState({
      click: true,
    });
  }

  getMood = (dataFromChild) => {
    this.setState({
      mood: dataFromChild
    });
  }

  handleZodiacChange(event) {
    this.setState({ 
      url: `https://aztro.herokuapp.com/?sign=${event.target.value}&day=today`,
      zodiac: event.target.value 
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Spotify Zodiac</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Find your horoscope and your playlist!
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="usr">What is your Zodiac</label>
                  <select
                    name="zodiac"
                    type="text"
                    className="form-control"
                    value={this.state.zodiac}
                    onChange={this.handleZodiacChange}
                  >
                    <option value="">Select Zodiac</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => this.handleClick()}
                    type="button"
                    className="create-todo btn btn-success btn-block"
                  >
                    Let's Go!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Fetch url={this.state.url} getMood={this.getMood} />
        </div>
        <div>
           <Sprite mood={this.state.mood}/> 
        </div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
