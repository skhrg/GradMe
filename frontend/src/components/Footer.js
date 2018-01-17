import React from 'react'
import StageLink from './containers/StageLink';
import logo from '../logo.svg'

const Footer = () => (
  <div id="footer" className="footer-panel">
    
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    <div className='footer-section links'>
      
      <h className="link"><StageLink stage="home">HOME</StageLink></h>
      
      <h className="link"><StageLink stage="planner">PLANNER</StageLink></h>
      
      <h className="link"><StageLink stage="dashboard">DASHBOARD</StageLink></h>

      <a href="https://tcolabs.org" className="link">Contact</a>
      <a href="https://tcolabs.org" className="link">About</a>
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

export default Footer
