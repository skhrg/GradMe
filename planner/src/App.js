import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js';
import Planner from './components/Planner.js';
import Footer from './components/Footer.js';

//experimental modular import. will later move to own component hierarchy for Dashboard.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardExpand from './components/Dashboard/CardExpand.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Navbar/>

        <Planner/>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Footer />

        <div style={{width: 500 + 'px'}}>
          <CardExpand /> </div>
      </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
