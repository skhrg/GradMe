import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.js'
import Planner from './components/Guide/Planner.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Admin from './components/Admin/Admin.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  fontFamily: "Roboto Slab",
  palette: {
    primary1Color: '#e0f7fa',
    alternateTextColor: '#000',
    accent1Color: '#e64a19'
  },
  checkbox: { checkedColor: '#e64a19'},
})

const App = ({ match: { params } }) => {
  return (
    <div className="App">
      <Navbar/>
      <MuiThemeProvider muiTheme={muiTheme}>
      <Switch>
        <Route exact path='/home' component={Homepage}/>
        <Route exact path='/planner' component={Planner}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
      </MuiThemeProvider>
      <Footer/>
    </div>
  )
}

export default App;
