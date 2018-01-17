import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.js'
import Planner from './components/Guide/Planner.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

const App = ({ match: { params } }) => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/home' component={Homepage}/>
        <Route exact path='/planner' component={Planner}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;
