import React, { Component } from 'react';
import $ from 'semantic-ui-react';

import logo from './logo.svg';
import './App.css';
import './css/selector.css';
import './css/sitewide.css';
import './css/Navbar.css'

import Navbar from './components/Navbar.js';
import PageContainer from './components/PageContainer.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <PageContainer/>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Footer />
      </div>
    );
  }
}



export default App;
