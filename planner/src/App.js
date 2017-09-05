import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Planner from './components/Guide/Planner.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//experimental modular import. will later move to own component hierarchy for Dashboard.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#e0f7fa',
        alternateTextColor: '#000',
        accent1Color: '#f90'
      }
    })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
