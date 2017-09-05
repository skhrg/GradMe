import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Planner from './Guide/Planner.js';
import Dashboard from './Dashboard/Dashboard.js';
import '../css/Navbar.css'

class Navbar extends React.Component {

    render() {
        return (
        	<div>
        		<div className="ui large top fixed visible pointing secondary menu">
          			<div className="ui container">
            			<a className="active item">Home</a>
            			<a className="item">Work</a>
            			<a className="item">Company</a>
            			<a className="item">Careers</a>
            			<div className="right menu">
                			<div className="item">
                  				<a className="ui button">Log in</a>
                			</div>
                			<div className="item">
                  				<a className="ui primary button">Sign Up</a>
                			</div>
            			</div>
          			</div>
      			</div>
        		<Switch>
            		<Route exact path='/' component={Planner}/>
            		<Route exact path='/dashboard' component={Dashboard}/>
          		</Switch>
        	</div>
        );
    }
}

export default Navbar;
