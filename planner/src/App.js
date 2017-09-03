import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Planner from './components/Guide/Planner.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//experimental modular import. will later move to own component hierarchy for Dashboard.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Navbar/>
        <div className="navbar">
          <Switch>
            <Route exact path='/' component={Planner}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </Switch>
        </div> 

        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
