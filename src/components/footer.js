import React, { Component } from 'react';
import '../styles/App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/jonathan-canfield-978641104/">
          <img alt="" className="socialmediabutton" src="linkedinimg.png"/>
        </a>
        <a href="https://twitter.com/jtcanfield100">
          <img alt="" className="socialmediabutton"  src="twitterlogo.png"/>
        </a>
        <a href="https://github.com/jtcanfield">
          <img alt="" className="socialmediabutton" src="github.png"/>
        </a>
      </div>
    );
  }
}
