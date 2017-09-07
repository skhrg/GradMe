import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

//experimental modular import. will later move to own component hierarchy for Dashboard.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#b3e5fc',
        alternateTextColor: '#000',
        accent1Color: '#e64a19'
      }
    })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <Navbar/>

        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
