import React, {Component} from 'react';
import BarChart from './BarChart.js';
import '../../css/Overview.css';
import '../../css/Dashboard.css';

class Overview extends React.Component {


    render() {
        return (
            <div className = "HHS"> 
			    <div className = "ui container">
			    	<div className = "ui stackable grid">
			    		<div className = "row">
			    			<div className = "nine wide column">
			    				<BarChart />
			    			</div>
			    			<div className = "seven wide left aligned column">
			                	<div>
					                 <h1>You need...</h1>
					                 <br></br>
					                 <h3><em>40</em> more credits to complete your major</h3>
					                 <h3><em>23</em> more credits to complete your first minor</h3>
					                 <h3><em>4</em> more credits to complete your second minor</h3>
					                 <h3><em>28</em> more credits to complete your track</h3>
			                	</div>
            				</div>
			    		</div>
			    	</div>
				</div>
            </div>
        );
    }
}

export default Overview;
