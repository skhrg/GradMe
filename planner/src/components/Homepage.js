import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';

class Homepage extends React.Component {
	componentDidMount() {
        document.title="Homepage";
    }
    render() {
        return (
       	<div>
		  	<div className="parallax scrollpoint">
		    	<h2 className="title title-center fadeIn">Graduate on time. Or earlier.</h2>
		    	<h3 className="subtitle fadeInSlow">GradMe is an all-in-one guide to course planning.</h3>
		    	<div className="prompt">
		      		<a href="#content" className="further fadeInSlow">LEARN MORE</a>
		      		<Link to="/planner" className="further fadeInSlow">START PLANNING</Link>
		    	</div>
		  	</div>

		  	<div id="content"></div>
		    <div id="intro" className="panel">
		      	<div className="txt">
		        	<h className="capt">We'll help you graduate.<hr/></h>
		        	<p className="description">GradMe displays every course you need to graduate — for <b>any combination</b> of majors, minors, or pre-professional tracks. Helping you optimize your course schedule for the long-term.</p>
		      	</div>
		    </div>

		    <div id="first" className="panel">
		      	<div className="txt panel-item">
		        	<h className="capt">Control your curriculum.<hr/></h>
		        	<p className="description">GradMe categorizes all of your credits. It even highlights courses that satisfy <b>multiple requirements at once</b>. So you can focus your time on what's necessary.</p></div>
		      	<div className="triangle-right mobile-hide"></div>
		      	<div id="image-first" className="panel-item mobile-hide"></div> 
		    </div>

		    <div id="second" className="panel">
			    <div id="image-second" className="panel-item mobile-hide"></div> 
			    <div className="triangle-left mobile-hide"></div>
			    <div className="txt panel-item">
			        <h className="capt">Easy-to-use.<hr/></h>
			        <p className="description">Simply enter your majors, minors, and tracks into our convenient course planner application. We'll calculate your best move.</p> </div>
		    </div>

		    
		    <div id="last" className="panel">
		      	<div className="txt">
		        	<h className="capt">Get ahead today.<hr/></h>
		      	</div>
		    </div>

		    <div id="backdrop" className="panel">         
		        <div className="coupled">
		          <div className="logo sizecolor outline"><i className="student icon"></i>GradMe</div>
		          <p><br/></p>
		          <a href="./planner.html">
		            <h className="capt final">GET STARTED</h> 
		          </a>
		        </div>
		    </div>
		</div>
        );
    }
}

export default Homepage;
