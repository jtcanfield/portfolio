import React, { Component } from 'react';
import '../styles/App.css';
import TopBar from './topbar.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="AppComponent">
        <TopBar />
        <Footer />
      </div>
    );
  }
}

export default App;
