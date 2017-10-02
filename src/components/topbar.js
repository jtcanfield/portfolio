import React, { Component } from 'react';
import '../styles/App.css';

export default class TopBar extends Component {
  constructor() {
   super();
    this.state = {
      token: null
    }
  }
  buttonclicked = (event)=>{
    console.log("clicked");
    console.log(event.target);
  }
  render() {
    return (
      <div className="topbar-container">
        <div className="topbar-left">
          <h1 className="name-title">Jonathan Canfield</h1>
        </div>
        <div className="topbar-right">
          <p className="topbar-button"
            onClick={this.buttonclicked}>
            About
          </p>
          <p className="topbar-button"
            onClick={this.buttonclicked}>
            Projects
          </p>
          <p className="topbar-button"
            onClick={this.buttonclicked}>
            Contact
          </p>
          <p className="topbar-button"
            onClick={this.buttonclicked}>
            Resume
          </p>
        </div>
      </div>
    );
  }
}
