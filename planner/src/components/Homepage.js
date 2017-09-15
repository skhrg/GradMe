import React from 'react';
import '../css/homepage.css';

class Homepage extends React.Component {
    render() {
        return (
       	<div>
		  <div className="parallax scrollpoint">
		    <h2 className="title title-center fadeIn">Graduate on time. Or earlier.</h2>
		    <h3 className="subtitle fadeInSlow">GradMe is an all-in-one guide to course planning.</h3>
		    <div id="content" className="prompt">
		      <a href="#content" className="further fadeInSlow">LEARN MORE</a>
		      <a href="./planner.html" className="further fadeInSlow">START PLANNING</a>
		    </div>
		  </div>


		    <div id="intro" className="panel">
		      <div id="text">
		        <h className="caption">We'll help you graduate.<hr/></h>
		        <p className="description">GradMe displays every course you need to graduate — for <b>any combination</b> of majors, minors, or pre-professional tracks. Helping you optimize your course schedule for the long-term.</p>
		      </div>
		    </div>

		    <div id="first" className="panel">
		      <div id="text" className="panel-txt">
		        <h className="caption">Control your curriculum.<hr/></h>
		        <p className="description">GradMe categorizes all of your credits. It even highlights courses that satisfy <b>multiple requirements at once</b>. So you can focus your time on what's necessary.</p></div>
		      <div className="triangle-right mobile-hide"></div>
		      <div id="image-first" className="panel-img mobile-hide"></div> 
		    </div>

		    <div id="second" className="panel">
		      <div id="image-second" className="panel-img mobile-hide"></div> 
		      <div className="triangle-left mobile-hide"></div>
		      <div id="text" className="panel-txt">
		        <h className="caption">Easy-to-use.<hr/></h>
		        <p className="description">Simply enter your majors, minors, and tracks into our convenient course planner application. We'll calculate your best move.</p> </div>
		    </div>

		    <div id="close" className="panel">
		      <div id="text">
		        <h className="caption">Get ahead today.</h>
		        <p className="description"></p>
		      </div>
		    </div>

		    <div id="last" className="panel">         
		        <div className="coupled">
		          <div className="logo sizecolor outline"><i className="student icon"></i>GradMe</div>
		          <p><br/></p>
		          <a href="./planner.html">
		            <h className="caption final">GET STARTED</h> 
		          </a>
		        </div>
		    </div>
		</div>
        );
    }
}

export default Homepage;
