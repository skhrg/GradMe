import React from 'react';

export default class Footer extends React.Component {
	
	render() {
		return(

			<div id="footer" className="footer-panel">

     		<div className="footer-section">
        		<div className="footer-item">
         			<h className="footer-caption">Follow</h> 
          			<div className="icons">
            			<a href="#" className="fa fa-facebook"></a>
            			<a href="#" className="fa fa-twitter"></a>
            			<a href="#" className="fa fa-google"></a>
            			<a href="#" className="fa fa-linkedin"></a>
            			<a href="#" className="fa fa-reddit"></a>
          			</div></div>

        		<div className="footer-item">
          			<h className="footer-caption">Signup</h> 
          			<div className="ui fluid action input">
            			<input type="text" placeholder="Email address..." />
            			<button className="ui orange button">Submit</button>
          			</div>
          			<p className="copyright">Already have an account? <a href="#" className="teal">Login</a> here.</p>
        		</div>

        		<div className="footer-item">
          			<h className="footer-caption">Navigate</h> 
          			<a href="../../Front-End/homepage.html" className="in-site">Home</a>
          			<a href="#" className="in-site">Course Planner</a>
          			<a href="#" className="in-site">Contact</a>
          			<a href="#" className="in-site">About</a>
        		</div>
      		</div>

      		<div className="subnote">
        		<h className="copyright copyright-pos">Copyright © Lyle Paskowitz 2017</h>
      		</div>
   			</div>
		)
	}
}