import React, { Component } from 'react';
import '../styles/App.css';
import TopBar from './topbar.js';
import Header from './header.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import LittleThings from './littlethings.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="AppComponent">
        <TopBar />
        <Header />
        <About />
        <Portfolio />
        <LittleThings />
        <Footer />
      </div>
    );
  }
}

export default App;
