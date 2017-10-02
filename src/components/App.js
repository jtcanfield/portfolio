import React, { Component } from 'react';
import '../styles/App.css';
import TopBar from './topbar.js';
import Header from './header.js';
import Portfolio from './portfolio.js';
import About from './about.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="AppComponent">
        <TopBar />
        <Header />
        <Portfolio />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
