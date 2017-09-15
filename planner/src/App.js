import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
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
        primary1Color: '#e3f2fd',
        alternateTextColor: '#000',
        accent1Color: '#e64a19'
      }
    })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">

        <Navbar/>
        <Switch>
          <Route exact path='/planner' component={Planner}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
