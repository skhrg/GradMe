import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

export default class Footer extends React.Component {
	
	render() {
		return(

			<div id="footer" className="footer-panel">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className='footer-section links'>
          	<a href="../../Front-End/homepage.html" className="link">Home</a>
          	<h className="link"><Link to='/' style={{color: '#9bddff'}}>Planner</Link></h>
            <h className="link"><Link to='/dashboard' style={{color: '#9bddff'}}>Dashboard</Link></h>
          	<a href="tcolabs.org" className="link">Contact</a>
          	<a href="tcolabs.org" className="link">About</a>
      	</div>

        <div className="footer-section icons">
            <a href="https://facebook.com"><div className="fa fa-facebook"></div></a>
            <a href="https://twitter.com"><div className="fa fa-twitter"></div></a>
            <a href="https://plus.google.com"><div className="fa fa-google"></div></a>
            <a href="https://linkedin.com"><div className="fa fa-linkedin"></div></a>
            <a href="https://reddit.com"><div className="fa fa-reddit"></div></a>
        </div>

        <h className="copyright">Copyright © Lyle Paskowitz 2017</h>
   			</div>
		)
	}
}