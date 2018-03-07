import React from 'react';
import BarChart from './BarChart.js';
import CreditsLeft from './CreditsLeft.js';
import OtherProgress from './OtherProgress.js';
import '../../css/Overview.css';
import '../../css/Dashboard.css';

class Overview extends React.Component {

    render() {
        return (
            <div className = "section insetShadow"> 
			    <div className = "ui container">
				    <div >
	                    <h className="sectionTitle">Your overview</h>
	                    <p className="subtitle">A general look at your progress towards your graduation requirements.</p>
	                </div>
				    <div className = "ui stackable grid">
				    	<div className = "row">
				    		<div className = "nine wide column">
				    			<BarChart />
				    		</div>
				    		<div className = "seven wide left aligned column" style={{"fontFamily" : "Open Sans"}}>
				                <CreditsLeft />
	            			</div>
				    	</div>
				    </div>
					<div>
						<h className = "sectionTitle"> Other Progress </h>
						<p className = "subtitle"> Your progress to completing majors, minors, and pre-professional tracks you are not currently a part of. </p>
		            	<OtherProgress />
		            </div>
				</div>

				
            </div>
        );
    }
}

export default Overview;
