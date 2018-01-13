import React, {Component} from 'react';
import BarChart from './BarChart.js';
import CreditsLeft from './CreditsLeft.js';
import '../../css/Overview.css';
import '../../css/Dashboard.css';

class Overview extends React.Component {


    render() {
        return (
            <div className = "section insetShadow"> 
			    <div className = "ui container">
			    <div className="sectionCaption">
                    <h className="sectionTitle">Your overview</h>
                    <p className="subtitle">A general look at your progress towards your graduation requirements.</p>
                </div>
			    	<div className = "ui stackable grid">
			    		<div className = "row">
			    			<div className = "nine wide column">
			    				<BarChart />
			    			</div>
			    			<div className = "seven wide left aligned column" style={{"font-family" : "Open Sans"}}>
			                	<CreditsLeft />
            				</div>
			    		</div>
			    	</div>
				</div>
            </div>
        );
    }
}

export default Overview;
