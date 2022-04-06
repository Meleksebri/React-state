import "./App.css";

import React, { Component } from "react";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    fullName: "Melek Sebri",
    bio: "this is the default bio , if you want to customize it just enter your bio as a prop in the Profile component in the App.js file",
    profession: "Your Profession",
    imgSrc: "imageInPublic.jpg",
    shows: false,
  };

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.shows ? (
          <div>
            <Profile
              fullName={this.state.fullName}
              bio={this.state.bio}
              profession={this.state.profession}
              imgSrc={this.state.imgSrc}
            ></Profile>
          </div>
        ) : (
          <h4>Press the button to show the profile</h4>
        )}

        <button className="show_btn" onClick={this.toggleShow}>
          {this.state.shows ? "Hide profile card" : "Show profile card"}
        </button>
      </div>
    );
  }
}
