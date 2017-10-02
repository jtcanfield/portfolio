import React, { Component } from 'react';
import '../styles/App.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar-container">
        <div className="topbar-left">
          <h1 className="name-title">Jonathan Canfield</h1>
        </div>
        <div className="topbar-right">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <p>Resume</p>
        </div>
      </div>
    );
  }
}
