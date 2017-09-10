import React, {Component} from 'react';
import BarChart from './BarChart.js';
import '../../css/Overview.css';
import '../../css/Dashboard.css';

class Overview extends React.Component {


    render() {
        return (
            <div className = "HHS"> 
            	<BarChart />
            </div>
        );
    }
}

export default Overview;
