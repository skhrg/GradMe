import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Planner from './Guide/Planner.js';
import Dashboard from './Dashboard/Dashboard.js';
import '../css/Navbar.css'

class Navbar extends React.Component {
				// <div className="ui large menu">
    //       			<div className="ui container">
    //         			<a className="active item">Home</a>
    //         			<a className="item">Planner</a>
    //         			<a className="item">Dashboard</a>
    //         			<div className="right menu">
    //             			<div className="item">
    //               				<a className="ui button">Log in</a>
    //             			</div>
    //             			<div className="item">
    //               				<a className="ui primary button">Sign Up</a>
    //             			</div>
    //         			</div>
    //       			</div>
    //   			</div>
    render() {
        return (
        	<div>
        		
        		<Switch>
            		<Route exact path='/' component={Planner}/>
            		<Route exact path='/dashboard' component={Dashboard}/>
          		</Switch>
        	</div>
        );
    }
}

export default Navbar;
